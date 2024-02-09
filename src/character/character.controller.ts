import { Body, Controller, Get, HttpCode, Param, Put } from '@nestjs/common';
import { CharacterService } from './character.service';

export type AttributeType = {
  points: number;
  attributeId: number;
};

export type CharacterType = {
  id?: number;
  name: string;
  description: string;
  CharacterAttribute?: AttributeType[];
  createdAt?: Date;
};

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  getAttributes(): Promise<CharacterType[]> {
    return this.characterService.getCharacteres();
  }

  @Get(':id')
  getAttribute(@Param() param: any): Promise<CharacterType> {
    return this.characterService.getCharacter(parseInt(param.id));
  }

  @Put()
  @HttpCode(201)
  createCharacter(@Body() body: CharacterType): Promise<CharacterType> {
    return this.characterService.createCharacter(body);
  }
}
