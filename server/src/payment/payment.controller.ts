import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment-dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) {}

    @Post()
    create(@Body() dto: CreatePaymentDto) {
        return this.paymentService.create(dto);
    }
}
