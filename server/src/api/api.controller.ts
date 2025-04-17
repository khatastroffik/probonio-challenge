import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './create-api.dto';
import { exit } from 'process';

const FREEPUBLICAPIS = "https://www.freepublicapis.com/api/apis?limit=10"; // max: 10 items

@Controller('api')
export class ApiController {
    constructor(private readonly apiService: ApiService) {
        fetch(FREEPUBLICAPIS, { method: 'GET' })
            .then(response => response.json())
            .then((apis: any[]) => {
                return apiService.createMany(apis);
            })
            .then(() => exit(0))
            .catch(() => { });
    }

    @Post()
    create(@Body() createApiDto: CreateApiDto) {
        return this.apiService.create(createApiDto);
    }

    @Get()
    findAll() {
        return this.apiService.findAll();
    }

}
