import { Resolver, Query } from '@nestjs/graphql';
import { UserRepository } from '../users/user.repository';
import { User } from '../users/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private userRepository: UserRepository) {}

  @Query(returns => [User]) // Dönüş tipini belirttik
  async users(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}
