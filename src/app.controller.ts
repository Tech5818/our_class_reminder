import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

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

    const goMain = '처음으로';
    if (body.userRequest.utterance === '테스트') {
      res.json({
        version: '2.0',
        template: {
          outputs: [
            {
              simpleText: {
                text: '테스트',
              },
            },
          ],
          quickReplies: [
            {
              label: goMain,
              action: 'message',
              messageText: goMain,
            },
          ],
        },
      });
    }
  }
}
