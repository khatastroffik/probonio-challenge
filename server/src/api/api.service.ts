/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './create-api.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Api } from './api.entity';

@Injectable()
export class ApiService {
    constructor(@InjectModel(Api) private apiModel: typeof Api) {}

    async create(createApiDto: CreateApiDto) {
        await this.apiModel.create({ ...createApiDto });
        return 'Api entry created';
    }

    async findAll(): Promise<Api[]> {
        const apis = await this.apiModel.findAll();
        return apis;
    }

    count() {
        return `This action counts the APIs`;
    }

    async createMany(bulkApis: any[]) {
        const apis = bulkApis.map<CreateApiDto>((api) => {
            return {
                id: api.id,
                title: api.title,
                description: api.description,
            };
        });
        await this.apiModel.bulkCreate(apis);
    }
}
