import { Sequelize } from 'sequelize-typescript';
import models from './models';

const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env;

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: PGHOST,
        port: Number(PGPORT),
        username: PGUSER,
        password: PGPASSWORD,
        database: PGDATABASE,
      });
      sequelize.addModels([...models]);
      await sequelize.sync();
      return sequelize;
    },
  },
];