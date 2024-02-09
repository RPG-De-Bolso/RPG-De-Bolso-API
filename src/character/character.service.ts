import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AttributeType, CharacterType } from './character.controller';

const prisma = new PrismaClient();

@Injectable()
export class CharacterService {
  async getCharacteres(): Promise<CharacterType[]> {
    return await prisma.character.findMany({
      include: {
        CharacterAttribute: { select: { points: true, attributeId: true } },
      },
    });
  }

  async getCharacter(id: number): Promise<CharacterType> {
    const character = await prisma.character.findUnique({
      where: { id },
      include: {
        CharacterAttribute: { select: { points: true, attributeId: true } },
      },
    });

    if (character) {
      return character;
    } else {
      throw new HttpException(
        'Personagem não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async createCharacter(params: CharacterType): Promise<CharacterType> {
    const characterAttribute: AttributeType[] = params.CharacterAttribute.map(
      (attribute) => ({
        points: attribute.points,
        attributeId: attribute.attributeId,
      }),
    );

    try {
      return await prisma.character.create({
        data: {
          name: params.name,
          CharacterAttribute: {
            createMany: {
              data: characterAttribute,
            },
          },
        },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
