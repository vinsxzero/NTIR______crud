import { getCustomRepository } from "typeorm";
import { AplicationRepository } from "../repositories/aplicationRepository";
import { IAplicacaoInterface } from "../interface/IAplicacaoInterface";
class ApplicationService {
  async create({
    regiao,

    gravidadeInfeccao,

    numeroDePontos,

    volumePorPonto,

    volumeTotal,

    unidades,

    paralisia,

    formularioId,
  }: IAplicacaoInterface) {
    const applicationRepository = getCustomRepository(AplicationRepository);

    const application = applicationRepository.create({
      regiao,

      gravidadeInfeccao,

      numeroDePontos,

      volumePorPonto,
      volumeTotal,
      unidades,
      paralisia,
      formulario: { id: formularioId },
    });

    await applicationRepository.save(application);

    return application;
  }
}

export { ApplicationService };
