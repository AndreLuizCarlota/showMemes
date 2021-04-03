import Helper, { IHelper } from "../models/Helper";
import { Request, Response } from "express";

class HelperController {
  async create(request: Request, response: Response) {
    const { name, amount } = request.body as IHelper;

    if (!name || !amount)
      return response.status(400).json({
        error: "Incorrect params!",
      });

    if (amount < 3)
      return response.status(400).json({
        error: "Amount is great less 3!",
      });

    const asking = await Helper.create({
      name,
      amount,
    });

    return response.json(asking);
  }

  async getAll(request: Request, response: Response) {
    const helpers = await Helper.find();
    return response.json(helpers);
  }
}

export { HelperController };
