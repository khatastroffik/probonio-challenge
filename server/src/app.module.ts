import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApiModule } from './api/api.module';
import * as path from 'path';
import { Api } from './api/api.entity';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'sqlite',
            storage: path.join(__dirname, '../db', 'free-public-apis.db'),
            autoLoadModels: true,
            synchronize: true,
            models: [Api],
        }),
        ApiModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
