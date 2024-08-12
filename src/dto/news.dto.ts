import { IsDate, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
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

export class UpdateNewsDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  date: Date;

  @IsString()
  @IsNotEmpty()
  body: string;
}

export class deleteNewsDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
