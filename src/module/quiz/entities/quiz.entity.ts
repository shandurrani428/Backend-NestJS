import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
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

}