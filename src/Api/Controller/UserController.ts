import { Request, Response } from "express";
import CreateService from "../Services/UserService/CreateService";

class UserController {
  async create(req: Request, res: Response): Promise<void> {
    const { cpf, email, password } = req.body;

   CreateService.create(cpf, email, password)
   .then(()=>{
    res.sendStatus(201);
   }).catch(e=>{
    res.sendStatus(500);
   });

  }
}

export default new UserController;