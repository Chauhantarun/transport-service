import express from "express";
import mongoose from "mongoose";
import Router from "./Routes/route.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", Router);

app.listen(8081, () => {
  console.log("server is running");
});

mongoose
  .connect(
    "mongodb+srv://Tarunchauhan:Tarun123@cluster0.aub5cv6.mongodb.net/Data"
  )
  .then(() => {
    console.log("database is connected successfully");
  })
  .catch((error) => {
    console.log("error in connecting database" + error);
  });
