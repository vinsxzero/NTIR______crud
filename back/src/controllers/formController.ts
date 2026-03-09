import { Request, Response } from "express";

import { FormService } from "../service/formService";
class FormController {
  async createForm(req: Request, res: Response) {
    const data = req.body;
    console.log(data);
    const formService = new FormService();

    const result = await formService.createForm(data);
    return res.json(result);
  }
}
export { FormController };
