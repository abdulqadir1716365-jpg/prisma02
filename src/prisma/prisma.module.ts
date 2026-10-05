import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service.js'; // 👈 .js check karein

@Global() // 👈 Yeh poore project me PrismaService ko register kar dega
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 👈 Isko export karna zaroori hai
})
export class PrismaModule {}
