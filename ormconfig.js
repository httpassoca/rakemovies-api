const dotenv = require('dotenv');

dotenv.config();

const folder = process.env.NODE_ENV === 'production' ? 'dist' : 'src';
const ext = process.env.NODE_ENV === 'production' ? 'js' : 'ts';
const psqlHost = process.env.NODE_ENV === 'production' ? process.env.POSTGRESQL_HOST_PRODUCTION : process.env.POSTGRESQL_HOST_DEVELOPMENT;

module.exports = [
  {
    'name': 'default',
    'type': 'postgres',
    'host': psqlHost,
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