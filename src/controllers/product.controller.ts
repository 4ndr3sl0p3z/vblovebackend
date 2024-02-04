import { Request, Response } from "express";
import { productService } from "../services";

export class productController {
    private readonly productToService : productService = new productService();

    constructor(){}

    all = async (req: Request, res: Response) => {
        const result = await this.productToService.all();

        res.json(result);
    }

    create = async (req: Request, res: Response) => {
        const body = req.body;

        const result = await this.productToService.create(body);

        res.json(result);
    }
}