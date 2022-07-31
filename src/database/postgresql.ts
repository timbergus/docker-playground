import { Client } from 'pg'

export const client = new Client({
  user: 'timbergus',
  host: 'postgresito',
  database: 'test',
  password: 'password',
  port: 5432,
})

const connect = async () => await client.connect()

connect()
