import express from "express";
import cors from "cors";
import mailSender from "./Router/nodemailer.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server is running on port ", port));
app.use("/api", mailSender);
