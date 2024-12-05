import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

export const createTweetManualValidator = (req, res, next) => {
  if (!req.body.tweet) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: "Tweet is required",
    });
  }

  if (req.body.tweet.length > 280) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: "Tweet must be 280 characters or less",
    });
  }
  next();
};

export const getTweetByIdManualValidator = (req, res, next) => {
  const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValidId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Invalid Tweet Id",
      success: false,
    });
  }
  next();
};
