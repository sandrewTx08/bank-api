import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsNumber, IsString,  } from 'class-validator';

export class CreateUserDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsNumber()
  @Type(() => Number)
  phone: number;

  @IsEmail()
  email: string;

  @IsDate()
  @Type(() => Date)
  age: Date;
}
