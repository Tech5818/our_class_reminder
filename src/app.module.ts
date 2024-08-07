import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsModule } from './news/news.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { LoggerMiddleware } from './middleware/LoggerMiddleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL,
      synchronize: true,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
    }),
    NewsModule,
    ScheduleModule,
    ChatbotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
