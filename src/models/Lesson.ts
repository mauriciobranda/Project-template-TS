import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
  } from 'typeorm';
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

  /*@OneToOne(type => Content, lesson => Lesson)
  content: Content;*/

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_At' })
  updatedAt: Date;
  }