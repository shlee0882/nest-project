import { Controller, Get } from '@nestjs/common';

@Controller('app1')
export class App1Controller {
  @Get('test')
  getHello(): string {
    return 'Hello from App1!';
  }
}
