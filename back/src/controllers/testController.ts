import { Request, Response } from "express";
import { TestService } from "../service/testService";

class TestController {
  async createTest(req: Request, res: Response) {
    const { name } = req.body;
    console.log("BODY:", req.body);
    const testService = new TestService();
    const result = await testService.createTest({ name });
    return res.json(result);
  }
}
export { TestController };
