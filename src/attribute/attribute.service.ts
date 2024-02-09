import { Injectable } from '@nestjs/common';
import { Attibute, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AttributeService {
  async getAttributes(): Promise<Attibute[]> {
    return await prisma.attibute.findMany();
  }

  async getAttribute(id: number): Promise<Attibute> {
    return await prisma.attibute.findUnique({ where: { id } });
  }
}
