import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';

@Injectable()
export class UsersDbService {
  // 💡 Sir ke structure ke mutabiq standard constructor call
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    // 💡 Ab standard object mapping smoothly execute hogi
    return this.prisma.user.create({
      data: createUserDto,
    });
  }
}
