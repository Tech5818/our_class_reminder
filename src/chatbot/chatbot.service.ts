import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from 'src/entitys/news.entity';
import { Schedule } from 'src/entitys/schedule.entity';
import { Between, Repository } from 'typeorm';

@Injectable()
export class ChatbotService {
  constructor(
    @InjectRepository(News) private readonly newsRepository: Repository<News>,
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}

  /**
   * 오늘의 소식을 전합니다.
   */
  async findToDay() {
    try {
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      return await this.newsRepository.findOne({
        where: {
          date: Between(startOfDay, endOfDay),
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
      const startOfDay = new Date();
      startOfDay.setDate(startOfDay.getDate() - 1);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date();
      endOfDay.setDate(endOfDay.getDate() - 1);
      endOfDay.setHours(23, 59, 59, 999);

      return await this.newsRepository.findOne({
        where: {
          date: Between(startOfDay, endOfDay),
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
      const startOfDay = new Date();
      startOfDay.setDate(startOfDay.getDate() - 2);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date();
      endOfDay.setDate(endOfDay.getDate() - 2);
      endOfDay.setHours(23, 59, 59, 999);

      return await this.newsRepository.findOne({
        where: {
          date: Between(startOfDay, endOfDay),
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
