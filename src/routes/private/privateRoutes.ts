import { Router } from "express";

import { PlayerController } from "../../controllers/PlayerController";
import { Authorization } from "../../middleware/Authorization";

const playerController = new PlayerController();
const authorization = new Authorization();

const router = Router();

router.get("/players", authorization.hasAuthorized, playerController.getAll);

export { router };
