import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from './entity/news.entity';
import { Repository } from 'typeorm';
import { CreateNewsDto } from './dto/news.dto';
import { Schedule } from 'src/schedule/entity/schedule.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private readonly newsRepository: Repository<News>,
  ) {}

  async create(createNewsDto: CreateNewsDto): Promise<News> {
    try {
      const news = new News();

      news.body = createNewsDto.body;
      news.date = createNewsDto.date;

      return await this.newsRepository.save(news);
    } catch (error) {
      throw error;
    }
  }
}
