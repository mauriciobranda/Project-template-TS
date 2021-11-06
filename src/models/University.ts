import {
    Entity,
    Column
  } from 'typeorm';
import Instituicao from './Instituicao';


  @Entity('university')
  export default class University extends Instituicao{

    @Column()
    graduations: string;

    @Column()
    doctors: string;

    @Column()
    masters: string;
    }