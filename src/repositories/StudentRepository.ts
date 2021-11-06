import {getRepository} from "typeorm"; 
import { Student } from "../models/Student";

const user = getRepository(Student) .createQueryBuilder("key") .where("student.id = :id", { id: 4 }) .getOne();