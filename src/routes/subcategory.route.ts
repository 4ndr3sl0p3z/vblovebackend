import { Router } from "express";
import { subcategoryController } from "../controllers";

const route = Router();

export default (app: Router) => {
    const subcategoryToController: subcategoryController = new subcategoryController();
    app.use('/subcategory', route);

    route.post('/create', subcategoryToController.create)
}