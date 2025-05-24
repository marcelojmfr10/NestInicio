import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // configuración de pipes globales
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // solo deja la data que estoy esperando
      forbidNonWhitelisted: true, // muestra un mensaje de error con las propiedades que no se necesitan
    })
  )

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
