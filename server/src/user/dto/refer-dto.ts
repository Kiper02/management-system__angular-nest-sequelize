import { Type } from "class-transformer";
import { IsString } from "class-validator";


export class ReferDto {
    @IsString({message: 'Должно быть строкой'})
    @Type(() => String)
    readonly referId: string;
    @IsString({message: 'Должно быть строкой'})
    @Type(() => String)
    readonly linkRef: string;
}