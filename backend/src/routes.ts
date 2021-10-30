import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import Cars from "./controllers/CarsController";
import Users from   "./controllers/UserController";
import Session from "./controllers/SessionController"
import ensureAutheticated from "./middlewares/ensureAuthenticaded";

const routes = Router();
const upload = multer(uploadConfig);

routes.post("/session", Session.index);
routes.get("/cars", Cars.index);

routes.use(ensureAutheticated)
routes.get("/cars/:id", Cars.show);
routes.post("/cars", upload.array("images"), Cars.create);
routes.delete("/cars/:id", Cars.remove);

routes.get("/users", Users.index);
routes.get("/users/:id", Users.show);
routes.post("/users", upload.array("images"), Users.create);



export default routes;
