import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { App1Controller } from './app1.controller';
import { MemberController } from './member.controller';
import { ProductController } from './product.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // MongooseModule.forRoot('your-mongodb-connection-string')
  ],
  controllers: [AppController, App1Controller, MemberController, ProductController],
  providers: [AppService],
})
export class AppModule {}
