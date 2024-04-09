import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { QuestionsEntity } from 'src/module/quiz/entities/question.entity';
import { QuizEntity } from 'src/module/quiz/entities/quiz.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'shan007',
    database: 'QuizApp',
    schema: "public",
    entities: [QuizEntity, QuestionsEntity],
    synchronize: true,
    logging: true,
}