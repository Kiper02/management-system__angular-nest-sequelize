import { Type } from "class-transformer";
import { IsEmail, IsPhoneNumber, IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsString({message: 'Должно быть строкой'})
    @Type(() => String)
    readonly firstName: string;
    @IsString({message: 'Должно быть строкой'})
    @Type(() => String)
    readonly lastName: string;
    @IsString({message: 'Должно быть строкой'})
    @Type(() => String)
    readonly patronymic: string;
    @IsPhoneNumber('RU', {message: 'Неккоректный номер телефона'})
    @Type(() => String)
    readonly phone: string;
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Неккоректный email'})
    @Type(() => String)
    readonly email: string;
    @IsString({message: 'Должно быть строкой'})
    @Length(3, 20, {message: 'Не менее 3 и не более 20 символов'})
    @Type(() => String)
    readonly password: string;
}