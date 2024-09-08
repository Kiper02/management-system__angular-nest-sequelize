import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString } from "class-validator";


export class ReferDto {

    @ApiProperty({example: 'linkRef', description: 'Уникальная ссылка пригласившего пользователя'})
    @IsString({message: 'Должно быть строкой'})
    @Type(() => String)
    readonly linkRef: string;
}