import { Filter } from "bad-words";
import {
  createTweet as createTweetRepository,
  getTweets as getTweetsRepository,
  getTweet as getTweetRepository,
  deleteTweet as deleteTweetRepository,
  updateTweet as updateTweetRepository,
} from "../repositories/tweetRespository.js";
import { StatusCodes } from "http-status-codes";

export const createTweet = async ({ body }) => {
  const filter = new Filter();
  if (filter.isProfane(body)) {
    console.log(body);
    console.log(filter.clean(body));
    throw {
      message: "Tweet contains blcoked words",
      status: 400,
    };
  }

  const tweet = await createTweetRepository({ body });
  return tweet;
};

export const getTweets = async () => {
  const tweets = await getTweetsRepository();
  return tweets;
};

export const getTweet = async (id) => {
  const tweet = await getTweetRepository(id);
  if (!tweet) {
    throw {
      message: "Tweet not found!",
      status: StatusCodes.NOT_FOUND,
    };
  }
  return tweet;
};

export const deleteTweet = async (id) => {
  const response = await deleteTweetRepository(id);
  return response;
};

export const updateTweet = async (id, body) => {
  const response = await updateTweetRepository(id, body);
  if (!response) {
    throw {
      message: "Tweet not found",
      status: 404,
    };
  }
  return response;
};
