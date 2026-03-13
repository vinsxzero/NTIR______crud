import { Router } from "express";

import { FormController } from "./controllers/formController";
import path from "path";
import { ApplicationController } from "./controllers/applicationController";
const formController = new FormController();
const applicationController = new ApplicationController();
const router = Router();

router.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "..", "../front/public/index.html"));
});
router.get("/submit-application/:id", (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "front/public/aplicacao.html"),
  );
});
router.post(`/submit-application`, applicationController.create);

router.post("/submit-form", async (req, res) => {
  const id = await formController.createForm(req, res);

  console.log("id: " + id + " criado com sucesso!");
  res.redirect("/submit-application/" + id);
});

export { router };
