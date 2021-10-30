import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    ManyToOne,
    OneToMany,
  } from 'typeorm';

import Class from './Class';
import { Content } from './Content';

@Entity('lesson')
export default class Lesson {
  @PrimaryGeneratedColumn('uuid')
  idAula: string;

  @Column({
    length: 255,
    unique: true,
  })
  description: string;

  @OneToOne(() => Content)
  @JoinColumn()
  content: Content;


  @ManyToOne(type => Class, lessons => Lesson, {eager: true} )
  classe: Class
//muitas lessons do tipo Lesson para uma classe Class


  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_At' })
  updatedAt: Date;
  }