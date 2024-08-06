import { Repository } from 'typeorm';
import { News } from '../entitys/news.entity';

export class NewsRepository extends Repository<News> {}
