import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { NewsService } from './news.service';
import { Response } from 'express';
import { CreateNewsDto } from './dto/news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  async create(@Res() res: Response, @Body() body: CreateNewsDto) {
    try {
      const response = await this.newsService.create(body);

      return res.status(HttpStatus.CREATED).json(response);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
    }
  }
}
