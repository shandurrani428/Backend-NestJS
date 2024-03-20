import { Body, Controller, Get, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuiz } from './dto/CreateQuiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) { }

  @Get()
  getHello(): string {
    return "this is new AI versioned mom app quiz for your assistance and you'llbe  likely to do everything"
  }

  @Get('/newOne')
  getSomething(): string {
    return this.quizService.getNewQuiz()
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quizData: CreateQuiz) {
    return { data: quizData }
  }

}
