import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name : "product" })
export class Product extends BaseEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column({ type : "decimal", precision : 16, scale : 2 })
    purchaseValue : number;

    @Column({ type : "decimal", precision : 16, scale : 2 })
    saleValue : number;

    @Column()
    description : string;

    @Column({ type : "longtext"})
    image : string;
}