import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/apiRouter.js";
import connectDB from "./config/dbConfig.js";
import cookieParser from "cookie-parser";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(morgan("combined"));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.render("home", { name: "Bhavana Matavalam" });
});

app.get("/ping", (req, res) => {
  res.json({
    messgae: "pong",
  });
});

app.get("/hello/*", (req, res) => {
  res.json({
    message: "world",
  });
});

app.get("/tweets/:tweet_id", (req, res) => {
  console.log(req.params);
  return res.json({ message: "tweet details" });
});

app.all("*", (req, res) => {
  return res.status(404).json({
    message: "Not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
  connectDB();
});
