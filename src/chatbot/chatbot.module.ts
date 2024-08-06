import { Module } from '@nestjs/common';
import { ChatbotController } from './chatbot.controller';
import { ChatbotService } from './chatbot.service';
import {
  ChatbotNewsRepository,
  ChatbotScheduleRepository,
} from './chatbot.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from 'src/entitys/news.entity';
import { Schedule } from 'src/entitys/schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([News, Schedule])],
  controllers: [ChatbotController],
  providers: [ChatbotService, ChatbotNewsRepository, ChatbotScheduleRepository],
})
export class ChatbotModule {}
