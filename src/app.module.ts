import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlConfig } from './database/mysql.config';
import { UserModule } from './users/user.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
  ],
})

export class AppModule {}