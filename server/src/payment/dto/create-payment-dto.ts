import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreatePaymentDto {

    @ApiProperty({example: 5, description: 'Уникальный индификатор пользователя, совершающего покупку'})
    @IsNumber()
    userId: number;

    @ApiProperty({example: 950, description: 'Сумма покупки'})
    @IsNumber()
    amount: number;
}