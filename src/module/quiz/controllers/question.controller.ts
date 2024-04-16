
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuestionDto } from '../dto/CreateQuestion.dto';
import { ApiTags } from '@nestjs/swagger';
import { QuestionService } from '../services/question.service';
import { QuestionsEntity } from '../entities/question.entity';
import { QuizService } from '../services/quiz.service';

@ApiTags("Question")
@Controller('question')
export class QuestionController {
    constructor(
        private readonly questionService: QuestionService,
        private readonly quizService: QuizService) { }


    @Get()
    getHello(): string {
        return "this is new AI versioned mom app quiz for your assistance and you'llbe  likely to do everything"
    }

    @Post()
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question: CreateQuestionDto): Promise<QuestionsEntity> {

        const quiz = await this.quizService.getQuizById(question.quizId)
        return await this.questionService.createNewQuiz(question, quiz)
    }
}