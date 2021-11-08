import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Class from '../models/Class';
import ClassRepository from '../repositories/ClassRepository';


const classRouter = Router();

classRouter.post('/', async (request, response) => {
  console.log('Add to database');

  try {
    
    console.log(request.body);
    const repo = getRepository(Class);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err: any) {
    console.log('err.message :>> ', err.message);
  }
});

classRouter.get('/', async (request, response) => {
  console.log("Gettt");
  response.json(await getRepository(Class).find());
  //response.send("Retorno do GET!");
});

classRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(ClassRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

export default classRouter;
