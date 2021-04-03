import { Router } from "express";

import { PlayerController } from "../../controllers/PlayerController";
import { AskingController } from "../../controllers/AskingController";
import { HelperController } from "../../controllers/HelperController";

import { Authorization } from "../../middleware/Authorization";

const playerController = new PlayerController();
const helperController = new HelperController();
const askingController = new AskingController();

const authorization = new Authorization();

const router = Router();

// Route Helpers
router.get("/helpers", authorization.hasAuthorized, helperController.getAll);
router.post("/helpers", authorization.hasAuthorized, helperController.create);

// Route Players
router.get("/players", authorization.hasAuthorized, playerController.getAll);

// Route Askings
router.get("/askings", authorization.hasAuthorized, askingController.getAll);
router.post("/askings", authorization.hasAuthorized, askingController.create);

export { router };
