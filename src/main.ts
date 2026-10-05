import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js'; // ESM me .js extension zaroori hai
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Sir ke class-validator decorators ko run karne ke liye validation pipe active karein
  app.useGlobalPipes(new ValidationPipe()); 

  await app.listen(3000);
}
bootstrap();
