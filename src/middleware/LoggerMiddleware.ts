import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl: url } = req;
    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      const { statusCode } = res;

      if (statusCode >= 200 && statusCode <= 400) {
        this.logger.log(`${method} ${url} ${duration}ms`);
      } else {
        this.logger.error(`${method} ${url} ${duration}ms`);
      }
    });

    next();
  }
}
