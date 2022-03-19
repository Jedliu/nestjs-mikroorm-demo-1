import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { MikroBook } from './library/book.entity';

const logger = new Logger('MikroORM');
const config: Options = {
  entities: [MikroBook],
  dbName: 'testdb',
  type: 'mysql',
  port: 3306,
  debug: true,
  user: 'root',
  password: 'password',
  logger: logger.log.bind(logger),
};

export default config;