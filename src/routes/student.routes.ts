import { validate } from "class-validator";
import { Router } from "express";
import { getConnection, getRepository } from "typeorm";
import { Student } from "../models/Student";

const studentRoutes = Router()

studentRoutes.get('/', (req, res) => {
    res.send('Hello from student routes')
})

studentRoutes.post('/', async (request, response) => {
    try{
        const repo = await getRepository(Student) //cria um repositorio de estudantes

        const { key, name, email } = request.body //desestrutura e pega os dados do corpo da requisição
        const student = repo.create({
             key, name, email
        }) //cria um estudante com os dados do corpo da requisição

        const errors = await validate(student) //valida o estudante

        if(errors.length === 0){
            const res = repo.save(student) //salva o estudante
            return response.status(201).json(res) //retorna o estudante salvo
        }
        response.status(400).json(errors) //retorna os erros de validação
    }catch(err){
        console.log(err)
    }

})

export default studentRoutes;
