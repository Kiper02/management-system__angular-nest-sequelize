import { Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment-dto';
import { PaymentService } from './payment.service';
import { AuthGuard } from 'src/guards/auth-guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Payment } from './payment.model';


@ApiTags('Покупки')
@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) {}

    @ApiOperation({summary: 'Создание ордера'})
    @ApiResponse({status: 200, type: Payment})
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard)
    @Post()
    create(@Body() dto: CreatePaymentDto) {
        return this.paymentService.create(dto);
    }

    @ApiOperation({summary: 'Получение ордеров'})
    @ApiResponse({status: 200, type: Payment})
    @UseGuards(AuthGuard)
    @Get(':id')
    getOrders(@Param('id') id: string) {
        console.log(id);
        return this.paymentService.getOrders(Number(id));
    }
}
