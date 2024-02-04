import { Router } from "express";
import { productController } from "../controllers";

const route = Router();

export default (app: Router) => {
    const productToController: productController = new productController();
    app.use('/product', route);

    route.get('/all', productToController.all);

    route.post('/create', productToController.create)
}