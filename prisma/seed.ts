// Libraries
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.attibute.createMany({
    data: [
      { name: 'Força', slug: 'for' },
      { name: 'Destreza', slug: 'des' },
      { name: 'Constituição', slug: 'con' },
      { name: 'Inteligencia', slug: 'int' },
      { name: 'Sabedoria', slug: 'sab' },
      { name: 'Carisma', slug: 'car' },
    ],
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
