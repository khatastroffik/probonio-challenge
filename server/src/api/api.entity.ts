import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Api', timestamps: false })
export class Api extends Model<InferAttributes<Api>, InferCreationAttributes<Api>> {
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        primaryKey: true,
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare title: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare description: string | undefined;
}
