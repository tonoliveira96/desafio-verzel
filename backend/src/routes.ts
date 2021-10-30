import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import Cars from "./controllers/CarsController";
import Users from   "./controllers/UserController";
import Session from "./controllers/SessionController"

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/cars", Cars.index);
routes.get("/cars/:id", Cars.show);
routes.post("/cars", upload.array("images"), Cars.create);

routes.get("/users", Users.index);
routes.get("/users/:id", Users.show);
routes.post("/users", upload.array("images"), Users.create);

routes.post("/session", Session.show);

export default routes;
