import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SubCategory } from "./subcategory.entity";

@Entity({ name : "category" })
export class Category extends BaseEntity{

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

    @OneToMany((type) => SubCategory, (sub) => sub.category)
    subcategory: SubCategory[]

}