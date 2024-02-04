import { Request, Response } from "express";
import { subcategoryService } from "../services";

export class subcategoryController {
    private readonly subcategoryToService: subcategoryService = new subcategoryService();

    constructor(){}

    create = async (req: Request, res: Response) => {
        const body = req.body;

        const result = await this.subcategoryToService.create(body);

        res.json(result);
    }
}