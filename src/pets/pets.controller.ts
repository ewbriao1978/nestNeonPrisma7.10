import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PetsService } from './pets.service.js';
import type { Pet } from './pets.interace.js';

@Controller('pets')
export class PetsController {

    constructor(private readonly petsService: PetsService) {}
    @Get('welcome') // localhost:3000/pets/welcome
    getWelcomePetMessage(): string {
        return this.petsService.getWelcomePetMessage();
    }

    @Get()  // localhost:3000/pets
    getAllPets(): Promise<Pet[]> {
        return this.petsService.getAllPets();
    }

    @Post("registrar")  // (POST) localhost:3000/pets/registrar
    createPet(@Body() pet: Pet): Promise<Pet> {
        return this.petsService.createPet(pet);
    }
    @Delete(":id") // (DELETE) localhost:3000/pets/:id
    deletePet(@Param("id") id: string): Promise<Pet> {
        return this.petsService.deletePet(id);
    }

    @Put(":id") // (PUT) localhost:3000/pets/:id
    updatePet(@Param("id") id: string, @Body() pet: Pet): Promise<Pet> {
        return this.petsService.updatePet(id, pet);
    }
}
