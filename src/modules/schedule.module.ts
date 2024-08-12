import { Module } from '@nestjs/common';
import { ScheduleController } from '../controller/schedule.controller';
import { ScheduleService } from '../service/schedule.service';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
