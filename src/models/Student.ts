import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity('student')
export class Student {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
    length: 45,
    unique: true,
    })
    name: string;

    @Column({
    length: 45,
    unique: true,
    })
    key: string;

}