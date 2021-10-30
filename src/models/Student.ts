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
import {IsEmail} from 'class-validator';

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

    @Column({
    length: 50,
    unique: true,
    })
    @IsEmail()
    email: string;

    @ManyToMany(type => Class)
    @JoinTable()
    classes: Class;

}