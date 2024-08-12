import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from 'src/entities/news.entity';
import { Schedule } from 'src/entities/schedule.entity';
import { Between, Repository } from 'typeorm';
import { endOfDay, startOfDay, subDays } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

@Injectable()
export class ChatbotService {
  constructor(
    @InjectRepository(News) private readonly newsRepository: Repository<News>,
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}

  private readonly baseDate = toZonedTime(new Date(), 'Asia/Seoul');

  /**
   * 오늘의 소식을 전합니다.
   */
  async findToDay() {
    try {
      const start = startOfDay(this.baseDate);

      const end = endOfDay(this.baseDate);

      return await this.newsRepository.findOne({
        where: {
          date: Between(start, end),
        },
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * 어제의 소식을 전합니다.
   */
  async findYesterday() {
    try {
      const start = startOfDay(subDays(this.baseDate, 1));

      const end = endOfDay(subDays(this.baseDate, 1));

      return await this.newsRepository.findOne({
        where: {
          date: Between(start, end),
        },
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * 엊그제의 소식을 전합니다.
   */
  async findTwoDaysAgo() {
    try {
      const start = startOfDay(subDays(this.baseDate, 2));

      const end = endOfDay(subDays(this.baseDate, 2));

      return await this.newsRepository.findOne({
        where: {
          date: Between(start, end),
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
