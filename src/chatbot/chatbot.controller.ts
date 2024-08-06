import { Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ChatbotService } from './chatbot.service';
import { ChatbotResponse } from 'src/util/Chatbot.util';

@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post('/today')
  async findToDay(@Res() res: Response) {
    try {
      const response = await this.chatbotService.findToDay();

      if (!response)
        return res
          .status(HttpStatus.OK)
          .json(ChatbotResponse('오늘의 소식은 작성되지 않았습니다.'));

      return res.status(HttpStatus.OK).json(ChatbotResponse(response.body));
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
    }
  }

  @Post('/yesterday')
  async findTomorrow(@Res() res: Response) {
    try {
      const response = await this.chatbotService.findYesterday();

      if (!response)
        return res
          .status(HttpStatus.OK)
          .json(ChatbotResponse('어제의 소식은 작성되지 않았습니다.'));

      return res.status(HttpStatus.OK).json(ChatbotResponse(response.body));
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
    }
  }

  @Post('/twodaysago')
  async findTwoDaysAgo(@Res() res: Response) {
    try {
      const response = await this.chatbotService.findTwoDaysAgo();

      if (!response)
        return res
          .status(HttpStatus.OK)
          .json(ChatbotResponse('엊그제의 소식은 작성되지 않았습니다.'));

      return res.status(HttpStatus.OK).json(ChatbotResponse(response.body));
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
    }
  }
}
