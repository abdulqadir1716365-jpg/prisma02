import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { UserModule } from './user/user.module.js';

@Module({
  imports: [
    PrismaModule, // 👈 Sabse pehle Prisma load hoga globally
    UserModule,   // 👈 Phir User module load hoga
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
