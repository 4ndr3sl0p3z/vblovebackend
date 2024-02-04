import { 
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

@Entity({ name : "identification_type" })
export class IdentificationType extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    initial: string

    @Column()
    descriptionType : string;

    @Column()
    active: boolean;

    @Column()
    createdBy : string;

    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updateAt : Date;
}