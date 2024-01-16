import userModel from "../Model/data.js";

export const getDataController = async (req, res) => {
  try {
    const { name, phone, email, text } = req.body;
    if (!name) {
      return res.send({ message: "name is require" });
    }
    if (!email) {
      return res.send({ message: "email is require" });
    }
    if (!phone) {
      return res.send({ message: "phone is require" });
    }
    if (!text) {
      return res.send({ message: "text is require" });
    }
    const storeData = await new userModel({
      name,
      phone,
      email,
      text,
    }).save();
    res.status(200).send({
      success: true,
      message: "thankyou our team will contact you as soon as posible",
      storeData,
    });
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "something went wrong",
      error,
    });
  }
};
