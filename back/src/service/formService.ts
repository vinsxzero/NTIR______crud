import { getCustomRepository } from "typeorm";
import { FormRepository } from "../repositories/formRepository";
import { IFormInterface } from "../interface/IFormInterface";
class FormService {
  async createForm(formData: IFormInterface) {
    const formRepository = getCustomRepository(FormRepository);
    const form = formRepository.create(formData);
    const savedForm = await formRepository.save(form);

    return savedForm;
  }
}

export { FormService };
