import { Router } from "express";
import mintController from "../controllers/fungible/mintController";
import transferController from "../controllers/fungible/transferController";
import burnController from "../controllers/fungible/burnController";

const ftRoute = Router();

ftRoute.post('/mint/:address/:amount', mintController);
ftRoute.put("transfer/:from/:to/:amount", transferController);
ftRoute.put("burn/:address/:amount", burnController);

export default ftRoute;