import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import * as path from 'path';

@Module({
    imports: [SequelizeModule.forRoot({
        dialect: 'sqlite',
        storage: path.join(__dirname, '../db', 'free-public-apis.db'),
        autoLoadModels: true,
        synchronize: true,
        models: [],
    })],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
