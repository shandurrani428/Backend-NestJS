import { InjectRepository } from "@nestjs/typeorm";
import { QuizEntity } from "../entities/quiz.entity";
import { Repository } from "typeorm";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";

export class QuizService {
    constructor(
        @InjectRepository(QuizEntity)
        private readonly quizRepository: Repository<QuizEntity>,
    ) { }



    async createNewQuiz(quizData: CreateQuizDto): Promise<QuizEntity> {
        // const newQuiz = this.quizRepository.create(quizData);
        return await this.quizRepository.save(quizData);
    }

    getNewQuiz(): string {
        return 'New Quiz is Here..!';
    }
}