import { Request, Response, Router } from "express";
import { categoryController } from "../controllers";

const route = Router();

export default (app: Router) => {
    const categoryToController: categoryController = new categoryController();
    app.use('/category', route);

    route.get('/all', categoryToController.all);

    route.get('/withSubCategory', categoryToController.withSubCategory);

    route.post('/create', categoryToController.create)
}