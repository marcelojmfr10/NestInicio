import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){

    }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({version: '4'})) id: string) {
        console.log({id});
        return this.carsService.findOneById(id);
    }

    @Post()
    create(@Body() createCarDto: CreateCarDto) {
        return createCarDto;
    }

    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id: string, @Body() body: any){
        return body;
    }

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id: string){
        return {
            method: 'delete',
            id
        }
    }
}
