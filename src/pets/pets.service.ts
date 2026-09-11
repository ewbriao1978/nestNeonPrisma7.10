import { Injectable } from '@nestjs/common';
import type { Pet } from './pets.interace.js';
import { PrismaService } from '../prisma.service.js';


@Injectable()
export class PetsService {

     constructor(private readonly prisma: PrismaService) {}


    getWelcomePetMessage(): string {
        return 'Welcome to the Pets API!';
    }
    getAllPets(): Promise<Pet[]> {
        
        return this.prisma.pets.findMany();
    }
    
    createPet(pet: Pet): Promise<Pet> {
        return this.prisma.pets.create({
            data: pet,
        });
    }   

    deletePet(id: string): Promise<Pet> {
        return this.prisma.pets.delete({
            where: {
                id: Number(id),
            },
        });
    }

    updatePet(id: string, pet: Pet): Promise<Pet> {
        return this.prisma.pets.update({
            where: {
                id: Number(id),
            },
            data: pet,
        });
    }

       
}
