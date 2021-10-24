import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity('lesson')
export default class Lesson {
    @PrimaryGeneratedColumn('uuid')
    idAula: string;
  
    @Column({
      length: 255,
      unique: true,
    })
    description: string;
  
    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'update_At' })
    updatedAt: Date;
  }