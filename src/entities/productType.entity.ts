import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name : "product-type" })
export class ProductType extends BaseEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    description : string;

    @Column({ default : true })
    active : boolean;

    @Column()
    createdBy : string;

    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updateAt : Date
}

