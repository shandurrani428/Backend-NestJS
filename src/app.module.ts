import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { QuizModule } from './module/quiz/quiz.module';
import { UserModule } from './module/user/user.module';
import { CitiesController } from './module/cities/cities.controller';
import { CitiesModule } from './module/cities/cities.module';
import { ApiProperty } from '@nestjs/swagger';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), QuizModule, CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
