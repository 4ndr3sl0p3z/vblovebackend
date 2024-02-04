import { Router } from "express"
import categoryRoute from "./category.route";
import subcategoryRoute from "./subcategory.route";
import productRoute from "./product.route";

export default ()=> {
    const app = Router();
    categoryRoute(app);
    subcategoryRoute(app)
    productRoute(app);

    return app;
}