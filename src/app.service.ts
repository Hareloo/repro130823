import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestEntity } from './entities/test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(TestEntity)
    private readonly testRepo: Repository<TestEntity>,
  ) {}
  async getHello(): Promise<string> {
    const all = await this.testRepo.find({});
    console.log(all);
    return 'Hello World!';
  }
}
