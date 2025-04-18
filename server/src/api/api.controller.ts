import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './create-api.dto';

@Controller('api/v1/apis')
export class ApiController {
    constructor(private readonly apiService: ApiService) {}

    @Post()
    create(@Body() createApiDto: CreateApiDto) {
        return this.apiService.create(createApiDto);
    }

    @Get()
    findAll() {
        return this.apiService.findAll();
    }
}
