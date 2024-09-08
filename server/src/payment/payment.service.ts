import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './payment.model';
import { CreatePaymentDto } from './dto/create-payment-dto';

@Injectable()
export class PaymentService {

    constructor(@InjectModel(Payment) private paymentModel: typeof Payment) {}

    async create(dto: CreatePaymentDto) {
        console.log(dto);
        const payment = await this.paymentModel.create(dto);
        return payment;
    }

    async getOrders(id: number) {
        const orders = await this.paymentModel.findAll({where: {userId: id}})
        return orders;
    }
}
