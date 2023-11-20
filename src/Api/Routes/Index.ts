import { Router } from "express";
import { Request, Response } from "express";
import UserController from "../Controller/UserController";
const routes = Router();

routes.post("/register",UserController.create)
routes.get("/",UserController.create)

routes.use((req: Request, res: Response) => {
  res.sendStatus(404);
});

export default routes;
