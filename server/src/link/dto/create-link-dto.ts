import { IsString } from "class-validator";

export class CreateLinkDto {
    @IsString({message: 'Должно быть строкой'})
    id: string;
    @IsString({message: 'Должно быть строкой'})
    link: string;
}