import { Repository } from 'typeorm';
import { News } from './entity/news.entity';

export class NewsRepository extends Repository<News> {}
