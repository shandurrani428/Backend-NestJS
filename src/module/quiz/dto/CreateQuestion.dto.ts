import { ApiProperty } from "@nestjs/swagger";
import { IS_LENGTH, IsNotEmpty, Length } from "class-validator";

export class CreateQuestionDto {
    @ApiProperty({ description: 'Rating of the employee' })
    @IsNotEmpty({ message: "Should not me empty the titleQuiz" })
    question: string;

    @ApiProperty()
    @IsNotEmpty({ message: "id should not be empty" })
    quizId: number
}