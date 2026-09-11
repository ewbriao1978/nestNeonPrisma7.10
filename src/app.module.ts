import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PetsModule } from './pets/pets.module.js';

@Module({
  imports: [PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
