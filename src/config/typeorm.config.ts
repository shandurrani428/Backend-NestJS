import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { City } from 'src/module/cities/entities/city.entity';
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
    entities: [QuizEntity, QuestionsEntity, City],
    synchronize: true,
    logging: true,
}