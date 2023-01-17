const dotenv = require('dotenv');

dotenv.config();

const folder = 'src';
const ext = 'ts';

module.exports = [
  {
    'name': 'default',
    'type': 'postgres',
    'host': process.env.POSTGRESQL_HOST,
    'port': process.env.POSTGRESQL_PORT,
    'username': process.env.POSTGRESQL_USERNAME,
    'password': process.env.POSTGRESQL_PASSWORD,
    'database': process.env.POSTGRESQL_DATABASE,
    'entities': [
      `./${folder}/models/**/entities/*.${ext}`,
    ],
    "migrations": [
      `./${folder}/common/database/migrations/*.${ext}`
    ],
    "cli": {
      "migrationsDir": "./src/common/database/migrations"
    }
  },
];