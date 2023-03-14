/** @format */

import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose
      .set("strictQuery", false)
      .connect(process.env.MONGO_URL);
    console.log(`Conneted To Mongodb Databse`.bgBlue.white);
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
