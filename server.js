import express from "express";
import mongoose from "mongoose";
import Router from "./Routes/route.js";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "./transport-frontend/build")));

app.use("/api", Router);

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./transport-frontend/build/index.html"));
});

app.listen(process.env.PORT || 8081, () => {
  console.log("server is running");
});

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("database is connected successfully");
  })
  .catch((error) => {
    console.log("error in connecting database" + error);
  });

