import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg'; // 👈 1. Driver adapter import karein
import pg from 'pg'; // 👈 2. Postgres native driver package import karein
import 'dotenv/config'; // .env variables safety checkpoint loading

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // 👈 3. Pool banayein aur use adapter ke zariye constructor me pass karein
    const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaPg(pool);
    
    super({ adapter }); // Driver adapter runtime runtime client memory injection mapping
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
