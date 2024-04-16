import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { QuestionsEntity } from "./question.entity";
@Entity("quiz")
export class QuizEntity extends BaseEntity {

    @PrimaryGeneratedColumn({
        comment: "This is unique Identifier"
    })
    id: number

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        type: "boolean",
        default: 1

    })
    isActive: boolean

    @OneToMany(() => QuestionsEntity, (QuestionsEntity) => QuestionsEntity.QuizEntity)
    QuestionsEntity: QuestionsEntity[]

}