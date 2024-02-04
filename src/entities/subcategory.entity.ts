import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./category.entity";

@Entity({ name : "subcategory" })
export class SubCategory extends BaseEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    description : string;

    @ManyToOne(type => Category, entity=> entity.id)
    @JoinColumn({ name : "categoryId"})
    category: Category;

    @Column()
    categoryId : number;

    @Column({ default : true })
    active : boolean;

    @Column()
    createdBy : string;

    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updateAt : Date
}