import { Router } from "express";
import mintController from "../controllers/nft/mintController";
import transferController from "../controllers/nft/transferController";
import burnController from "../controllers/nft/burnController";

const nftRoute = Router();

nftRoute.post('/mint/:address', mintController);
nftRoute.put("transfer/:from/:to", transferController);
nftRoute.put("burn/:address", burnController);

export default nftRoute;