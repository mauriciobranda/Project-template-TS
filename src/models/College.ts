import {
    Entity,
    Column,
  } from 'typeorm';
import Instituicao from './Instituicao';

//pequeno comment
  @Entity('college')
  export default class College extends Instituicao{

    @Column()
    graduations: string;
    }