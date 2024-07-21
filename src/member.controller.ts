import { Controller, Get } from '@nestjs/common';

@Controller('member')
export class MemberController {
  @Get()
  getMember(): string {
    return 'Hello from Member!';
  }
}
