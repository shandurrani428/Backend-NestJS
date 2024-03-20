import { IS_LENGTH, IsNotEmpty, Length } from "class-validator";

export class CreateQuiz {

    @IsNotEmpty({ message: "Should not me empty the titleQuiz" })
    titleQuiz: string;
    @IsNotEmpty({ message: "Should not me empty the Description" })
    @Length(2)
    description: string

}