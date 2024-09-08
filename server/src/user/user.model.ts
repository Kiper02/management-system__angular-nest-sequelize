import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Link } from "src/link/link.model";
import { Payment } from "src/payment/payment.model";



@Table({tableName: 'user'})

export class User extends Model<User> {
    
    @ApiProperty({example: 'id', description: 'Уникальный индификатор'})
    @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Иван', description: 'Имя'})
    @Column({type: DataType.STRING, allowNull: false})
    firstName: string; 

    @ApiProperty({example: 'Иванович', description: 'Отчество'})
    @Column({type: DataType.STRING, allowNull: false})
    patronymic: string; 

    @ApiProperty({example: 'Иванов', description: 'Фамилия'})
    @Column({type: DataType.STRING, allowNull: false})
    lastName: string; 


    @ApiProperty({example: '89519814866', description: 'Номер телефона'})
    @Column({type: DataType.NUMBER, allowNull: false})
    phone: string; 

    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, allowNull: false})
    email: string;

    @ApiProperty({example: 'userPassword', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'referId', description: 'Уникальный индификатор пригласившего пользователя'})
    @Column({type: DataType.INTEGER, allowNull: true})
    referId: number;

    @HasMany(() => Link)
    links: Link[];

    @HasMany(() => Payment)
    payments: Payment[];
}