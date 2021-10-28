import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import Cars from "./controllers/CarsController";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/cars", Cars.index);
routes.get("/cars/:id", Cars.show);
routes.post("/cars", upload.array("images"), Cars.create);

export default routes;
