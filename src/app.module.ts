import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestEntity } from './entities/test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
