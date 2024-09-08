import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Link } from "src/link/link.model";
import { Payment } from "src/payment/payment.model";



@Table({tableName: 'user'})

export class User extends Model<User> {
    
    @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    firstName: string; 

    @Column({type: DataType.STRING, allowNull: false})
    lastName: string; 

    @Column({type: DataType.STRING, allowNull: false})
    patronymic: string; 

    @Column({type: DataType.NUMBER, allowNull: false})
    phone: string; 

    @Column({type: DataType.STRING, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @Column({type: DataType.INTEGER, allowNull: true})
    referId: number;

    @HasMany(() => Link)
    links: Link[];

    @HasMany(() => Payment)
    payments: Payment[];
}