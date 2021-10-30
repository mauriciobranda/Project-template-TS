import { EntityRepository, Repository } from "typeorm";
import Lesson from "../models/Lesson";


@EntityRepository(Lesson)
export default class ClassRepository extends Repository<Lesson> {
  public async findByName(name: string): Promise<Lesson[]> {
    return this.find({
      where: {
        name,
      },
    });
  }
}