import { InjectRepository } from "@nestjs/typeorm";
import { QuestionsEntity } from "../entities/question.entity";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "../dto/CreateQuestion.dto";
import { QuizEntity } from "../entities/quiz.entity";

export class QuestionService {
    constructor(
        @InjectRepository(QuestionsEntity)
        private readonly questionQuestion: Repository<QuestionsEntity>,
    ) { }

    async createNewQuiz(questionData: CreateQuestionDto, quiz: QuizEntity): Promise<QuestionsEntity | undefined> {



        const newQuestion = await this.questionQuestion.save({
            question: questionData.question
        });

        quiz.QuestionsEntity = [...quiz.QuestionsEntity, newQuestion]


        return newQuestion



    }

    getNewQuiz(): string {
        return 'New Quiz is Here..!';
    }
}