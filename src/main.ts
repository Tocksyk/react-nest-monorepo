import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  app.setGlobalPrefix(configService.get<string>('appConfig.globalPrefix'));

  const config = new DocumentBuilder()
    .setTitle('BoilerPlate')
    .setDescription('The Sample Boiler Plate API')
    .setVersion('1.0')
    .addTag('BoilerPlate')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(configService.get<string>('appConfig.applicationPort'));
}
bootstrap();
