# Mongo Playground with Docker

I followed this [tutorial](https://www.youtube.com/watch?v=4Dko5W96WHg), and I have created a multi-database project with Docker.

To develop, use `docker compose` to launch the development environment.

```bash
docker compose -f docker-compose-dev.yml up
```

This will launch three containers with three different data bases: MongoDB, PostgreSQL, and MySQL. And it will launch our `index.ts` using `nodemon`, so all the changes will be applied in real time.

The project is a simple index with six endpoint to read and create contents in the three databases. It is written using Node and Express, and it uses the following libraries:

- [mongoose](https://mongoosejs.com/)
- [mysql2](https://github.com/sidorares/node-mysql2)
- [pg](https://node-postgres.com/)

There is also a file `client.http` that uses the VSCode plugin [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) to launch http requests so you can test the system working.
