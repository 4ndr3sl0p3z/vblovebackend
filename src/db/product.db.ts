import { AppDataSource } from "../dbConnection";
import { Product } from "../entities";

export class productDb{
    private readonly productRepository = AppDataSource.getRepository(Product);

    constructor(){}

    create = async (body: any) => {

        try {
            return await this.productRepository.insert(body);
        } catch (error) {
            return{
                success: false,
                message : error
            }
        }
    }

    all = async() => {
        try {
            return await this.productRepository.find({
                order : {
                    name : "ASC"
                }
            })
        } catch (error) {
            return{
                success : false,
                message : error
            }
        }
    }
}