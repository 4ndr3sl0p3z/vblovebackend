import { subcategoryDb } from "../db";

export class subcategoryService {
    private readonly subcategoryToDb: subcategoryDb = new subcategoryDb();
    constructor(){}

    create = async (body: any) => {
        return await this.subcategoryToDb.create(body);
    }
}