import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/user/user.model";



@Table({tableName: 'payment'})
export class Payment extends Model<Payment> {

    @ApiProperty({example: 'id', description: 'Уникальный индификатор'})
    @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 950, description: 'Сумма покупки'})
    @Column({type: DataType.INTEGER, allowNull: false})
    amount: number;

    @ApiProperty({example: 5, description: 'Уникальный индификатор пользователя, совершающего покупку'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number;

    @BelongsTo(() => User)
    user: User;
}