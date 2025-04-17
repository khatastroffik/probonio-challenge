import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './create-api.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Api } from './api.entity';

@Injectable()
export class ApiService {
    constructor(@InjectModel(Api) private apiModel: typeof Api) {}

    create(createApiDto: CreateApiDto) {
        return 'This action adds a new API';
    }

    findAll() {
        return `This action returns all APIs`;
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
