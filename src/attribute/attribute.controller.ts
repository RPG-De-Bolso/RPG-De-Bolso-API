import { Controller, Get, Param } from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { Attibute } from '@prisma/client';

@Controller('attribute')
export class AttributeController {
  constructor(private readonly attributeService: AttributeService) {}

  @Get()
  getAttributes(): Promise<Attibute[]> {
    return this.attributeService.getAttributes();
  }

  @Get(':id')
  getAttribute(@Param() param: any): Promise<Attibute> {
    return this.attributeService.getAttribute(parseInt(param.id));
  }
}
