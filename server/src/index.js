/** @format */

import express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

import authRouter from "./routes/authRoute.js";

//configure env
dotenv.config();

//databases config
connectDB();

//rest objects
const app = express();

//middlwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// rest api
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api", authRouter);

//Post
const PORT = process.env.PORT || 8080;

//Run listening
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`.bgCyan.white);
});
