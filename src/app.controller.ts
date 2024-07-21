import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()
  getHello(): string {
    return 'hello';
  }

  @Get('hello1')
  getHello1(): string {
    return 'hello1';
  }

  @Get('hello2')
  getHello2(): string {
    return 'hello2';
  }
}
