import { getCustomRepository } from "typeorm";
import { AplicationRepository } from "../repositories/aplicationRepository";
import { IAplicacaoInterface } from "../interface/IAplicacaoInterface";
class ApplicationService {
  async create(applicationData: IAplicacaoInterface) {
    const applicationRepository = getCustomRepository(AplicationRepository);

    const application = applicationRepository.create(applicationData);

    await applicationRepository.save(application);
    return application;
  }
}
export { ApplicationService };
