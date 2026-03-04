import { Router } from "express";

import { TestController } from "./controllers/testController";
import { FormController } from "./controllers/formController";
import path from "path";
import { ApplicationController } from "./controllers/applicationController";
const router = Router();

const formController = new FormController();
router.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "..", "../front/public/index.html"));
});

router.post("/submit-form", async (req, res) => {
  const formController = new FormController();
  const applicationController = new ApplicationController();
  const result = await formController.createForm(req, res);
  const result2 = await applicationController.create(req, res);
  return res.json(result2);
});
export { router };
