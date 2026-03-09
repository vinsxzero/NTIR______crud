import { Router } from "express";

import { FormController } from "./controllers/formController";
import path from "path";
import { ApplicationController } from "./controllers/applicationController";

const router = Router();

router.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "..", "../front/public/index.html"));
});

router.post("/submit-form", async (req, res) => {
  const formController = new FormController();
  await formController.createForm(req, res);
  const applicationController = new ApplicationController();
  const result = await applicationController.create(req, res);
  return res.json(result);
});
export { router };
