import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("combined"));

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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
