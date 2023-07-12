import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const mysqlConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Enes2002',
  database: 'basecamp',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};