import express from 'express'
import bodyParser from 'body-parser'
import { Animal } from './database/mongodb'
import { client } from './database/postgresql'
import { connection } from './database/mysql'
import { GET_USERS, POST_USER, GET_RECIPES, POST_RECIPE } from './queries'
import { RecipeType, UserType } from './types'

const app = express()

app.use(bodyParser.json())

const port = 3000

// Animals in MongoDB.

app.get('/animals', async (_, res) => {
  const animals = await Animal.find()
  res.send(animals)
})

app.post('/animal', async (req, res) => {
  await Animal.create(req.body)
  res.send('Animal created!')
})

// Users in PostgreSQL.

app.get('/users', async (_, res) => {
  const response = await client.query(GET_USERS)
  res.send(response.rows)
})

app.post('/user', async (req, res) => {
  const { name, surname, email, age } = req.body as UserType
  await client.query(POST_USER, [name, surname, email, age])
  res.send('User created!')
})

// Recipes in MySQL.

app.get('/recipes', (_, res) => {
  connection.query(GET_RECIPES, (_, results) => res.send(results))
})

app.post('/recipe', (req, res) => {
  const { name, ingredient, time } = req.body as RecipeType
  connection.query(POST_RECIPE, [name, ingredient, time], () =>
    res.send('Recipe created!')
  )
})

// Launch the server.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
