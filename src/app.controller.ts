import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
@ApiTags("Main Application")
@Controller("mom")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello()
  }

  @Get("/moizBhai")
  getSomething(): string {
    return "This is MOIZ brother called backend."
  }
}
