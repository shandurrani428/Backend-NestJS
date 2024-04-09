import { IS_LENGTH, IsNotEmpty, Length } from "class-validator";

export class CreateQuestionDto {
    @IsNotEmpty({ message: "Should not me empty the titleQuiz" })
    question: string;
}