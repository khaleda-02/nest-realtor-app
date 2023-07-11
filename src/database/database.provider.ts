import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import { databaseConfig } from './database.config';
import { User } from 'src/user/entities/user.entity';
dotenv.config();

export const databaseProviders = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const config = databaseConfig;
    const sequelize = new Sequelize({
      dialect: 'mysql',
      ...config,
    });
    sequelize.addModels([User]);
    await sequelize.sync();
    return sequelize;
  },
};
