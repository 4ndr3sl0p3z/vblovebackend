import { AppDataSource } from "../dbConnection";
import { SubCategory } from "../entities";

export class subcategoryDb {
    private readonly subcategoryRepository = AppDataSource.getRepository(SubCategory);

    constructor(){}

    create = async (body: any) =>{
        try {
            return await this.subcategoryRepository.insert(body);
        } catch (error) {
            return{
                success: false,
                message : error
            }
        }
    }
}