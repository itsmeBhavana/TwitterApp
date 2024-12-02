import express from "express";
import {
  getTweetById,
  getTweets,
  createTweet,
} from "../../controllers/tweetController.js";

const router = express.Router();

router.get("/", getTweets);

router.get("/:id", getTweetById);

router.post("/", createTweet);

export default router;
