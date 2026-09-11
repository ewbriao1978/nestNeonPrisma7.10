import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from "@prisma/adapter-neon"
import { config } from 'dotenv';

config(); // Load environment variables from .env file

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        const connectionString = process.env.DATABASE_URL;
        const adapter = new PrismaNeon({
           connectionString: connectionString,
        });
        super({ adapter });
    }
            

    async onModuleInit() {
        await this.$connect();
        console.log('PrismaService connected to the database');
    }
    
    async onModuleDestroy() {
        await this.$disconnect();
        console.log('PrismaService disconnected from the database');
    }
}