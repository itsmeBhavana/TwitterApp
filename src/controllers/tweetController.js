import { createTweet as createTweetService } from "../services/tweetService.js";

export const getTweets = (req, res) => {
  return res.json({
    message: "Welcome to the tweet route",
  });
};

export const getTweetById = (req, res) => {
  return res.json({
    message: "Welcome to the tweet route",
    id: req.params.id,
  });
};

export const createTweet = async (req, res) => {
  try {
    const response = await createTweetService({
      body: req.body.body,
    });
    return res.status(201).json({
      message: "Tweet created successfully",
      success: true,
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
        success: false,
      });
    }
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
