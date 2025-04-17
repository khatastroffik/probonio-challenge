import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Api } from './api.entity';

@Module({
    imports: [SequelizeModule.forFeature([Api])],
    controllers: [ApiController],
    providers: [ApiService],
})
export class ApiModule { }
