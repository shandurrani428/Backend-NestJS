import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { QuizEntity } from './quiz.entity';

@Entity("questions")
export class QuestionsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar'
    })
    question: string;

    @ManyToOne(() => QuizEntity, (QuizEntity) => QuizEntity)
    QuizEntity: QuizEntity
}
