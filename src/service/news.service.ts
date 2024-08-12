import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from '../entities/news.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreateNewsDto, deleteNewsDto, UpdateNewsDto } from '../dto/news.dto';
import { Schedule } from 'src/entities/schedule.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private readonly newsRepository: Repository<News>,
  ) {}

  async create(createNewsDto: CreateNewsDto): Promise<News> {
    const news = new News();

    news.body = createNewsDto.body;
    news.date = createNewsDto.date;

    return await this.newsRepository.save(news);
  }

  async update(updateNewsDto: UpdateNewsDto): Promise<UpdateResult> {
    const updateNews = await this.newsRepository.update(
      { id: updateNewsDto.id },
      { date: updateNewsDto.date, body: updateNewsDto.body },
    );

    return updateNews;
  }

  async delete(deleteNewsDto: deleteNewsDto) {
    try {
      const deleteNews = await this.newsRepository.delete({
        id: deleteNewsDto.id,
      });

      return deleteNews;
    } catch (error) {
      throw error;
    }
  }

  async findById() {
    try {
    } catch (error) {
      throw error;
    }
  }
}
