import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.NESTJS_BASEPATH || '/');
  await app.listen(process.env.NESTJS_PORT || 3000);
}
bootstrap();
