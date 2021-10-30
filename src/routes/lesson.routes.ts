import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Student } from '../models/Student';


const lessonRouter = Router();


lessonRouter.post('/', (req, res) => {
    res.send('Criar uma lesson');
})

lessonRouter.get('/', async (request, response) => {
    //response.json(await getRepository(Lesson).find());
    response.send("licoess");

  });

export default lessonRouter; //exporto para chamar na minha index.ts