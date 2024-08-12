import { Repository } from 'typeorm';
import { News } from '../entities/news.entity';

export class NewsRepository extends Repository<News> {}
