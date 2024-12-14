import express from "express";
import {
  getTweets,
  createTweet,
  deleteTweet,
  updateTweet,
} from "../../controllers/tweetController.js";
import { validate } from "../../validators/zodValidator.js";
import { tweetZodSchema } from "../../validators/tweetZodSchema.js";
import { getTweet } from "../../controllers/tweetController.js";
import { getTweetByIdManualValidator } from "../../validators/tweetManualValidation.js";
import { authenticateToken } from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getTweets);

router.get("/:id", getTweetByIdManualValidator, getTweet);

router.post("/", validate(tweetZodSchema), createTweet);

router.delete("/:id", getTweetByIdManualValidator, deleteTweet);

router.put("/:id", getTweetByIdManualValidator, updateTweet);

export default router;
