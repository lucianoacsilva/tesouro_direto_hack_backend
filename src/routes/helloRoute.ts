import { Router } from "express";
import helloController from "../controllers/helloController";

const helloRoute = Router();

helloRoute.get('/', helloController);

export default helloRoute;