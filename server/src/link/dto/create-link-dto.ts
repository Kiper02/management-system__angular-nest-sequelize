import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateLinkDto {
    @ApiProperty({example: 'id', description: 'Уникальный индификатор'})
    id: string;

    @ApiProperty({example: '1=9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', description: 'Уникальная ссылка приглашения'})
    link: string;
}