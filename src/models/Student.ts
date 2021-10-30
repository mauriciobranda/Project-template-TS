import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
  } from 'typeorm';
import Class from './Class';

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

    @ManyToMany(type => Class)
    @JoinTable()
    classes: Class;

}