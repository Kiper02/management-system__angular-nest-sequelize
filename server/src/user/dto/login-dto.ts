import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsString, Length } from 'class-validator';
export class LoginDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адрес' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Неккоректный email' })
  @Type(() => String)
  readonly email: string;

  @ApiProperty({ example: 'userPassword', description: 'Пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(3, 20, { message: 'Не менее 3 и не более 20 символов' })
  @Type(() => String)
  readonly password: string;
}
