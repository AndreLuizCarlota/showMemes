import Asking, { IAsking } from "../models/Asking";
import { Request, Response } from "express";

class AskingController {
  async create(request: Request, response: Response) {
    const { description, answer } = request.body as IAsking;
    if (!description || !answer)
      return response.status(400).json({
        error: "Incorrect params!",
      });

    if (answer.length < 5 || answer.length > 5)
      return response.status(400).json({
        error: "Answer is not equals 5!",
      });

    const asking = await Asking.create({
      description,
      answer,
    });

    return response.json(asking);
  }

  async getAll(request: Request, response: Response) {
    const askings = await Asking.find();
    return response.json(askings);
  }
}

export { AskingController };
