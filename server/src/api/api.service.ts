import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './create-api.dto';

@Injectable()
export class ApiService {
    create(createApiDto: CreateApiDto) {
        return 'This action adds a new API';
    }

    findAll() {
        return `This action returns all APIs`;
    }

    count() {
        return `This action counts the APIs`;
    }

    createMany(bulkApis: any[]) {
        return `This action adds many APIs at once!`;
    }
}
