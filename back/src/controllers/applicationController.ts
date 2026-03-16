import { getCustomRepository } from "typeorm";
import { ApplicationService } from "../service/applicationService";
import { Request, Response } from "express";

class ApplicationController {
  async create(req: Request, res: Response) {
    const {
      regiao,
      gravidadeInfeccao,
      numeroDePontos,
      volumePorPonto,
      volumeTotal,
      unidades,
      paralisia,
    } = req.body;
    const formularioId = req.params.formularioId;
    const data = {
      regiao,
      gravidadeInfeccao,
      numeroDePontos,
      volumePorPonto,
      volumeTotal,
      unidades,
      paralisia,
      formularioId,
    };
    const applicationService = new ApplicationService();

    await applicationService.create(data);
    return data;
  }
}

export { ApplicationController };
