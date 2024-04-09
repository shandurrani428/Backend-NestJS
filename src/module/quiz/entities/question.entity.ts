import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity("questions")
export class QuestionsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar'
    })
    question: string;
}
