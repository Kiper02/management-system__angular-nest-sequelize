import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment-dto';
import { PaymentService } from './payment.service';
import { AuthGuard } from 'src/guards/auth-guard';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) {}

    @UseGuards(AuthGuard)
    @Post()
    create(@Body() dto: CreatePaymentDto) {
        return this.paymentService.create(dto);
    }
}
