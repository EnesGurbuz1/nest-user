import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Diğer sorgular ve işlemler buraya eklenebilir.
}
