import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()

const app = express();
app.use(express.json())
app.use(cors())

const users = []

app.get('/usuarios', async(req, res) => {

    const users =  await prisma.users.findMany()

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {

    await prisma.users.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })


    res.status(201).json({ message: "Usuário criado com sucesso!" })
})

app.put('/usuarios/:id', async (req, res) => {

    await prisma.users.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })


    res.status(201).json({ message: "Usuário alterado com sucesso!" })
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.users.delete({
        where: {
            id: req.params.id
        },
    })

    res.status(201).json({ message: "Usuário deletado com sucesso!" })
})

app.listen(3000)