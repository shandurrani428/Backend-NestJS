import { Body, Controller, Get, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Quiz")
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

  // @Post('/create')
  // @HttpCode(200)
  // @UsePipes(ValidationPipe)
  // createNewQuiz(@Body() quizData: CreateQuizDto) {
  //   return { data: quizData }
  // }


  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return this.quizService.createNewQuiz(quizData)
  }
}
