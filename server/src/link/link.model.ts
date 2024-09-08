import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/user/user.model";




@Table({tableName: 'link'})
export class Link extends Model<Link> {

    @ApiProperty({example: 'id', description: 'Уникальный индификатор'})
    @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '1=9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', description: 'Уникальная ссылка приглашения'})
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    link: string;

    @ApiProperty({example: 5, description: 'Уникальный индификатор пользователя генерирующего ссылку'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: true})
    userId: number;

    @BelongsTo(() => User)
    user: User;
}