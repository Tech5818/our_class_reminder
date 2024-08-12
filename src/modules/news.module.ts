import { Module } from '@nestjs/common';
import { NewsController } from '../controller/news.controller';
import { NewsService } from '../service/news.service';
import { NewsRepository } from '../repository/news.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from '../entities/news.entity';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  controllers: [NewsController],
  providers: [NewsService, NewsRepository],
})
export class NewsModule {}
