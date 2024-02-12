import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Attibute, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AttributeService {
  async getAttributes(): Promise<Attibute[]> {
    return await prisma.attibute.findMany();
  }

  async getAttribute(id: number): Promise<Attibute> {
    const attribute = await prisma.attibute.findUnique({ where: { id } });

    if (attribute) {
      return attribute;
    } else {
      throw new HttpException('Atributo não encontrado', HttpStatus.NOT_FOUND);
    }
  }
}
