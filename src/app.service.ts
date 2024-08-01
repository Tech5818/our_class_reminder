import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger = new Logger(AppService.name);

  constructor(@InjectConnection() private readonly connection: Connection) {}

  /**
   * DB가 제대로 작동하는지 테스트
   */
  async onModuleInit() {
    try {
      await this.connection.query('SELECT 1');
      this.logger.log('✅ Database connection is success');
    } catch (error) {
      this.logger.error('❌ Database connection failed:', error.message);
    }
  }
}
