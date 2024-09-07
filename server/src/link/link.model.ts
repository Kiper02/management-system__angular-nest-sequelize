import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/user/user.model";




@Table({tableName: 'link'})
export class Link extends Model<Link> {

    @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false, unique: true})
    link: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: true})
    userId: number;

    @BelongsTo(() => User)
    user: User;
}