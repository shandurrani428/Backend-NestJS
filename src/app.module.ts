import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './module/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { QuizEntity } from './module/quiz/entities/quiz.entity';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot(typeOrmConfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
