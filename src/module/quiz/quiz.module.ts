import { Module } from '@nestjs/common';
import { QuizController } from "./controllers/quiz.controller"
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizEntity } from './entities/quiz.entity';
import { QuestionController } from './controllers/question.controller';
import { QuestionsEntity } from './entities/question.entity';
import { ApiTags } from '@nestjs/swagger';
import { QuestionService } from './services/question.service';

@Module({
    imports: [TypeOrmModule.forFeature([QuizEntity, QuestionsEntity])],
    controllers: [QuizController, QuestionController],
    providers: [QuizService, QuestionService]
})
export class QuizModule { }
