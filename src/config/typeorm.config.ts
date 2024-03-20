import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { QuizEntity } from 'src/module/quiz/entities/quiz.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'shan007',
    database: 'QuizApp',
    schema: "public",
    entities: [QuizEntity],
    synchronize: true,
    logging: true,
}