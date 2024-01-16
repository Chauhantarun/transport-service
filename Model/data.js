import { timeStamp } from "console";
import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", Schema);
