import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Paint } from 'src/entity/paint';

const AppDataSource = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "admin",
  database: "test",
  entities: [Paint],
  synchronize: true,
  logging: false,
})

AppDataSource.initialize()
  .then(() => {

  })
  .catch((error) => console.log(error))