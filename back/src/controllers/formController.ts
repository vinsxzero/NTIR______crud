import { Request, Response } from "express";

import { FormService } from "../service/formService";
class FormController {
  async createForm(req: Request, res: Response) {
    const data = req.body;

    const formService = new FormService();

    const form = await formService.createForm(data);

    return form.id;
  }
}
export { FormController };
