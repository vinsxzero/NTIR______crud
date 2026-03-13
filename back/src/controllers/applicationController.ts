import { getCustomRepository } from "typeorm";
import { ApplicationService } from "../service/applicationService";
import { Request, Response } from "express";

class ApplicationController {
  async create(req: Request, res: Response) {
    const data = req.body;

    const applicationService = new ApplicationService();
    const result = await applicationService.create(data);
    return res.json(result);
  }
}

export { ApplicationController };
