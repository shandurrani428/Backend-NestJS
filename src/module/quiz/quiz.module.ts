import { Module } from '@nestjs/common';
import { QuizController } from "./quiz.controller"
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizEntity } from './entities/quiz.entity';


@Module({
    imports: [TypeOrmModule.forFeature([QuizEntity])],
    controllers: [QuizController],
    providers: [QuizService]
})
export class QuizModule { }
