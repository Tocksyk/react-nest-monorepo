import { registerAs } from '@nestjs/config';

export default registerAs('sql', () => ({
  dialect: 'mysql',
  host: process.env.SQL_HOST,
  port: Number(process.env.SQL_PORT),
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  autoLoadModels: true,
  synchronize: true,
}));
