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
router.get("/insert-application/:id", (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "front/public/aplicacao.html"),
  );
});
router.get("/success", (req, res) => {
  return res.sendFile(
    path.join(__dirname, "..", "..", "front/public/success.html"),
  );
});
router.post(`/insert-application/:formularioId`, async (req, res) => {
  await applicationController.create(req, res);
  res.redirect("/success");
});

router.post("/submit-form", async (req, res) => {
  const id = await formController.createForm(req, res);

  console.log("id: " + id + " criado com sucesso!");
  res.redirect("/insert-application/" + id);
});

export { router };
