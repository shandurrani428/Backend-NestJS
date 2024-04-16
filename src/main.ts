import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('CRUD NEST JS EXAMPlE')
    .setVersion('1.0')
    .addTag('Nest Learning Api Work')
    .build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('myapi', app, document);

  await app.listen(3001);
}
bootstrap();
