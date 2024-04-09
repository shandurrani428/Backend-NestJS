
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuestionDto } from '../dto/CreateQuestion.dto';

@Controller('question')
export class QuestionController {
    constructor() { }

    @Get()
    getHello(): string {
        return "this is new AI versioned mom app quiz for your assistance and you'llbe  likely to do everything"
    }


    @Post()
    @UsePipes(ValidationPipe)

    saveQuestion(@Body() question: CreateQuestionDto) {



        return {

            data: question
        }
    }
}