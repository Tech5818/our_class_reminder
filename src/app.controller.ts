import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { response, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/test')
  test(
    @Res() res: Response,
    @Body() body: { userRequest: { utterance: string } },
  ) {
    console.log(body.userRequest.utterance);

    const response = {
      version: '2.0',
      template: {
        outputs: [
          {
            simpleText: {
              text: '간단한 텍스트 요소입니다.',
            },
          },
        ],
      },
    };

    console.log(response);

    res.status(200).json({ anything: 'asfsafsd' });
  }
}
