import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Student } from '../models/Student';


const lessonRouter = Router();

lessonRouter.get('/lessons', async (req, res) => {
    res.json(await getRepository(Student).find());
})

lessonRouter.post('/lessons', (req, res) => {
    res.send('Criar uma lesson');
})

export default lessonRouter; //exporto para chamar na minha index.ts