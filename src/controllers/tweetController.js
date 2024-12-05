import {
  createTweet as createTweetService,
  getTweets as getTweetsService,
  getTweet as getTweetService,
  deleteTweet as deleteTweetService,
  updateTweet as updateTweetService,
} from "../services/tweetService.js";
import StatusCodes from "http-status-codes";
import { errorResponse, successResponse } from "../utils/responses.js";

export const createTweet = async (req, res) => {
  try {
    const response = await createTweetService({
      body: req.body.body,
    });
    return successResponse(
      res,
      response,
      StatusCodes.CREATED,
      "Tweet created successfully"
    );
  } catch (error) {
    return errorResponse(res, serror);
  }
};

export const getTweets = async (req, res) => {
  try {
    const response = await getTweetsService();
    return successResponse(
      res,
      response,
      StatusCodes.OK,
      "Tweets fetched successfully"
    );
  } catch (error) {
    return errorResponse(res, error);
  }
};

export const getTweet = async (req, res) => {
  try {
    const response = await getTweetService(req.params.id);
    return successResponse(
      res,
      response,
      StatusCodes.OK,
      "Tweet fetched successfully"
    );
  } catch (error) {
    return errorResponse(res, error);
  }
};

export const deleteTweet = async (req, res) => {
  try {
    const response = await deleteTweetService(req.params.id);
    return successResponse(
      res,
      response,
      StatusCodes.OK,
      "Successfully deleted the Tweet"
    );
  } catch (error) {
    return errorResponse(res, error);
  }
};

export const updateTweet = async (req, res) => {
  try {
    const response = await updateTweetService(req.params.id, req.body.body);
    return successResponse(
      res,
      response,
      StatusCodes.OK,
      "Tweet updated successfully"
    );
  } catch (error) {
    return errorResponse(res, error);
  }
};
