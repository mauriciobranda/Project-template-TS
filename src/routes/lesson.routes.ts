import { Router } from 'express';
import { getRepository } from 'typeorm';
import Lesson from '../models/Lesson';
import { Student } from '../models/Student';

const lessonRouter = Router();

lessonRouter.post('/', async (request, response) => {
  try {
    console.log(request.body);
    const repo = getRepository(Lesson);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err: any) {
    console.log('err.message :>> ', err.message);
  }
})

lessonRouter.get('/', async (request, response) => {
    response.json(await getRepository(Lesson).find());
  });

export default lessonRouter; //exporto para chamar na minha index.ts