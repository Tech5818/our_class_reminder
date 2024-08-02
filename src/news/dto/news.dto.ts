import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateNewsDto {
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  date: Date;

  @IsString()
  @IsNotEmpty()
  body: string;
}
