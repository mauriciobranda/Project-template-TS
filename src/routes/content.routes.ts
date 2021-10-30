import { Router } from "express";
import { getRepository } from "typeorm";
import { Content } from "../models/Content";


const contentRouter = Router()

contentRouter.get('/', async (req, res) => {
    res.json(await getRepository(Content).find());
    //res.send('Hello from content')
})

contentRouter.post('/', async (req, response) => {
    try{
        const repo = getRepository(Content);
        const res = await repo.save(req.body);
        return response.status(201).json(res);
        //res.send('Hello from content: '+ req.body.description)
    } catch (e: any) {
        console.log('err.message :>> ', e.message);
    }

})

export default contentRouter;

