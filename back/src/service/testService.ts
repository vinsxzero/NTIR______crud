import { getCustomRepository } from "typeorm";
import { TestRepository } from "../repositories/testRepositories";
import { ITestInterface } from "../interface/ITestInterface";
class TestService {
  async createTest({ name }: ITestInterface) {
    const testRepository = getCustomRepository(TestRepository);
    const test = testRepository.create({ name });
    await testRepository.save(test);
    return test;
  }
}

export { TestService };
