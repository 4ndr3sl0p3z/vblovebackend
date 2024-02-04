import { AppDataSource } from "../dbConnection";
import { Category } from "../entities";

export class categoryDb {
    private readonly categoryRepository = AppDataSource.getRepository(Category);

    constructor(){}

    create = async(body: any) => {
        try {
            return await this.categoryRepository.insert(body);
        } catch (error) {
            return{
                success : false,
                message : error
            }
        }
    }

    all = async() => {
        try {
            return await this.categoryRepository.find({
                order : {
                    description : "ASC"
                }
            })
        } catch (error) {
            return{
                success : false,
                message : error
            }
        }
    }

    withSubCategory = async() => {
        try {
            return await this.categoryRepository.find({
                order : {
                    description : "ASC"
                },
                relations : {
                    subcategory: true
                }
            })
        } catch (error) {
            console.log(error)
            return{
                success : false,
                message : error
            }
        }
    }
}