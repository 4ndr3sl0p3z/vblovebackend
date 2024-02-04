import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name : "productImage"})
export class productImage extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id : string;

}
