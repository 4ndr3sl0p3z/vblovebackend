import { categoryDb } from "../db";

export class categoryService {
    private readonly categoryToDb: categoryDb = new categoryDb();

    constructor(){};

    create = async (body: any)=> {
        return await this.categoryToDb.create(body);
    }

    all = async ()=> {
        return await this.categoryToDb.all();
    }

    withSubCategory = async ()=> {
        return await this.categoryToDb.withSubCategory();
    }
}