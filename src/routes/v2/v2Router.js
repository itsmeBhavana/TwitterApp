import express from "express";
import tweetRouter from "../v2/tweet.js";

const router = express.Router();

router.use("/tweets", tweetRouter);

export default router;
