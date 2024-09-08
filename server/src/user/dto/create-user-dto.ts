import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsPhoneNumber, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'Иван', description: 'Имя'})
    @IsString({message: 'Должно быть строкой'})
    @Type(() => String)
    readonly firstName: string;

    @ApiProperty({example: 'Иванов', description: 'Фамилия'})
    @IsString({message: 'Должно быть строкой'})
    @Type(() => String)
    readonly lastName: string;

    @ApiProperty({example: 'Иванович', description: 'Отчество'})
    @IsString({message: 'Должно быть строкой'})
    @Type(() => String)
    readonly patronymic: string;

    @ApiProperty({example: '89519814866', description: 'Номер телефона'})
    @IsPhoneNumber('RU', {message: 'Неккоректный номер телефона'})
    @Type(() => String)
    readonly phone: string;

    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Неккоректный email'})
    @Type(() => String)
    readonly email: string;
    
    @ApiProperty({example: 'userPassword', description: 'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(3, 20, {message: 'Не менее 3 и не более 20 символов'})
    @Type(() => String)
    readonly password: string;
}