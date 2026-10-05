import { Injectable } from '@nestjs/common';
import { UsersDbService } from './users.db.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';

@Injectable()
export class UsersService {
  constructor(private usersDbService: UsersDbService) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.usersDbService.create(createUserDto);
  }
}
