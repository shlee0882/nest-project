import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get()
  getProduct(): string {
    return 'Hello from Product!';
  }
}
