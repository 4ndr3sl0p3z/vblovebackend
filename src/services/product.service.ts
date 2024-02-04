import { productDb } from "../db";

export class productService {
    private readonly productToDb: productDb = new productDb();

    constructor(){};

    create = async (body: any)=> {
        return await this.productToDb.create(body);
    }

    all = async ()=> {
        return await this.productToDb.all();
    }
}