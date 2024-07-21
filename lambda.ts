import { Handler, APIGatewayProxyEvent, Context } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { AppModule } from './src/app.module';
import serverlessExpress from '@vendia/serverless-express';

const createNestServer = async () => {
  const expressApp = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  await app.init();
  return expressApp;
};

let server: any;

const bootstrapServer = async () => {
  if (!server) {
    const expressApp = await createNestServer();
    server = serverlessExpress({ app: expressApp });
  }
  return server;
};

export const handler: Handler = async (event: APIGatewayProxyEvent, context: Context) => {
  console.log('Handler triggered with event:', JSON.stringify(event, null, 2));
  const server = await bootstrapServer();
  return server(event, context);
};
