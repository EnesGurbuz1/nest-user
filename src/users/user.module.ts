import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { UserResolver } from '../graphql/user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  providers: [UserResolver, UserRepository],
})
export class UserModule {}
