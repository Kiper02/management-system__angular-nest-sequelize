import { IsNumber } from "class-validator";

export class CreatePaymentDto {
    @IsNumber()
    userId: number;
    @IsNumber()
    amount: number;
}