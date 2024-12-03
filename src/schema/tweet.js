import mongoose from "mongoose";

const tweetSchema = mongoose.Schema({
  body: {
    type: String,
    required: true,
    trim: true,
    maxlength: 280,
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema); //tweet collection

export default Tweet;
