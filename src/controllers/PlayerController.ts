import { Request, Response } from "express";
import { JWT } from "../services/JWT";
import Player from "../models/Player";
import Helper from "../models/Helper";

class PlayerController {
  async create(request: Request, response: Response) {
    const { name, email, age } = request.body;

    if (!name || !email)
      return response.status(400).json({
        error: "Incorrect params or does not exists!",
      });

    const helpers = await Helper.find();

    const player = await Player.create({
      age,
      name,
      email,
      helpers,
    });

    return response.json({
      player,
      token: new JWT().generateToken(player._id),
    });
  }

  async getAll(request: Request, response: Response) {
    const players = await Player.find();
    return response.json(players);
  }
}

export { PlayerController };
