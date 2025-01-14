import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';


@Entity('content')
export class Content {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
    length: 255,
    unique: true,
    })
    description: string;

    @Column({
    length: 45,
    unique: true,
    })
    linkContent: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'update_at' })
    updatedAt: Date;

    }