import mysql from 'mysql2'

export const connection = mysql.createConnection({
  host: 'maysita',
  user: 'timbergus',
  password: 'password',
  database: 'test',
})

connection.connect()
