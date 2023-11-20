import { Router } from "express";
import { Request, Response } from "express";
import UserController from "../Controller/UserController";

const UserRoutes = Router();

UserRoutes.post("/create", UserController.create);