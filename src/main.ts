import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import next from 'next';
import { Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const dev = process.env.NODE_ENV !== 'production';
  const nextApp = next({ dev });
  const handle = nextApp.getRequestHandler();
  await nextApp.prepare();

  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('NestJS API 문서')
    .setVersion('1.0')
    .addTag('nestjs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use('/api', (req: Request, res: Response, next: Function) => {
    next();
  });
  app.use('/graphql', (req: Request, res: Response, next: Function) => {
    next();
  });
  app.use((req: Request, res: Response) => handle(req, res));

  await app.listen(3000);
}

bootstrap();
