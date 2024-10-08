import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { response, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/keyboard')
  getHello(@Res() res: Response) {
    res.json({ type: 'text' });
  }

  @Post('/message')
  test(
    @Res() res: Response,
    @Body() body: { userRequest: { utterance: string } },
  ) {
    const data = {
      version: '2.0',
      template: {
        outputs: [
          {
            simpleText: {
              text: '테스트',
            },
          },
        ],
      },
    };

    res.json(data);
  }
}
