import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

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
