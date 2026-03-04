import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { router } from "./routes";
import path from "path";
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "..", "front", "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  },
);
createConnection()
  .then(() => {
    console.log("Banco conectado!");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => console.log(error));
