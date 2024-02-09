import { Module } from '@nestjs/common';
import { AttributeController } from './attribute/attribute.controller';
import { CharacterController } from './character/character.controller';
import { CharacterService } from './character/character.service';
import { AttributeService } from './attribute/attribute.service';

@Module({
  imports: [],
  controllers: [AttributeController, CharacterController],
  providers: [AttributeService, CharacterService],
})
export class AppModule {}
