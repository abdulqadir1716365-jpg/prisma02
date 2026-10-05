import { Module } from '@nestjs/common';
import { UsersService } from './user.service.js';
import { UsersController } from './user.controller.js';
import { UsersDbService } from './users.db.service.js';
import { PrismaModule } from '../prisma/prisma.module.js'; // 👈 PrismaModule import karein

@Module({
  imports: [PrismaModule], // 👈 PrismaModule ko yahan dalein taake duplicate instance crash na ho
  controllers: [UsersController],
  providers: [UsersService, UsersDbService], // 👈 PrismaService ko yahan se remove kar dein
})
export class UserModule { }
