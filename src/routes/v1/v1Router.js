import express from "express";
import tweetRouter from "./tweet.js";
import commentRouter from "./comment.js";

const router = express.Router();

router.use("/tweets", tweetRouter);
router.use("/comments", commentRouter);

export default router;