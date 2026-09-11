import { Module } from '@nestjs/common';
import { PetsService } from './pets.service.js';
import { PetsController } from './pets.controller.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  providers: [PetsService, PrismaService],
  controllers: [PetsController]

})
export class PetsModule {}
