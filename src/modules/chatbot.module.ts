import { Module } from '@nestjs/common';
import { ChatbotController } from '../controller/chatbot.controller';
import { ChatbotService } from '../service/chatbot.service';
import {
  ChatbotNewsRepository,
  ChatbotScheduleRepository,
} from '../chatbot/chatbot.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from 'src/entities/news.entity';
import { Schedule } from 'src/entities/schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([News, Schedule])],
  controllers: [ChatbotController],
  providers: [ChatbotService, ChatbotNewsRepository, ChatbotScheduleRepository],
})
export class ChatbotModule {}
