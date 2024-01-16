import express from "express";
import { getDataController } from "../Controller/datacontroller.js";

const Router = express.Router();

Router.post("/getdata", getDataController);

export default Router;
