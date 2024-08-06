import { News } from 'src/entitys/news.entity';
import { Schedule } from 'src/entitys/schedule.entity';
import { Repository } from 'typeorm';

export class ChatbotNewsRepository extends Repository<News> {}

export class ChatbotScheduleRepository extends Repository<Schedule> {}
