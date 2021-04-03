import { Router } from "express";
import { PlayerController } from "../../controllers/PlayerController";

const router = Router();

const playerController = new PlayerController();

router.post("/players", playerController.create);

export { router };
