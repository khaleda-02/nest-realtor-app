import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: IDatabaseConfigAttributes = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
};

interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number;
  urlDatabase?: string;
}
