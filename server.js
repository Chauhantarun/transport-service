import express from "express";
import mongoose from "mongoose";
import Router from "./Routes/route.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", Router);

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
