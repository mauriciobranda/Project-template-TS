import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Class from '../models/Class';
import ClassRepository from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  console.log("Passou aqui o POSTTTTT")
  try {
    console.log(request.body);
    const repo = getRepository(Class);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err: any) {
    console.log('err.message :>> ', err.message);
  }
});

/*classRouter.post('/classe', function (req, res) {
  console.log("possssst")

  res.send('POST request to the homepage')
})*/

/*
classRouter.post('/',async (req,response) => {
  var username = req.body.name;
  var htmlData = 'Hello:' + username;
  response.send(htmlData);
  console.log(htmlData);
});*/

classRouter.get('/', async (request, response) => {
  //response.json(await getRepository(Class).find());
  response.send("Retorno do GET!");
});

classRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(ClassRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

export default classRouter;
