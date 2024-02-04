import { Request, Response } from "express";
import { categoryService } from "../services";

export class categoryController {
    private readonly categoryToService : categoryService = new categoryService();

    constructor(){}

    all = async (req: Request, res: Response) => {
        const result = await this.categoryToService.all();

        res.json(result);
    }

    withSubCategory = async (req: Request, res: Response) => {
        const result = await this.categoryToService.withSubCategory();

        res.json(result);
    }


    create = async (req: Request, res: Response) => {
        const body = req.body;

        const result = await this.categoryToService.create(body);

        res.json(result);
    }
}