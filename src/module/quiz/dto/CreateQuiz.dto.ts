import { IS_LENGTH, IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {

    @IsNotEmpty({ message: "Should not me empty the titleQuiz" })
    title: string;
    @IsNotEmpty({ message: "Should not me empty the Description" })
    @Length(2)
    description: string

}