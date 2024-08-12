import { News } from 'src/entities/news.entity';
import { Schedule } from 'src/entities/schedule.entity';
import { Repository } from 'typeorm';

export class ChatbotNewsRepository extends Repository<News> {}

export class ChatbotScheduleRepository extends Repository<Schedule> {}
