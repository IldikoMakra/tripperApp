const mongoose = require("mongoose");
const User = require("./user-model");

const StorySchema = new mongoose.Schema({
  target: {
    type: String,
    min: 6,
    max: 255,
  },
  title: {
    type: String,
    min: 6,
    max: 255,
  },
  content: {
    type: String,
    min: 6,
    max: 1500,
  },
  imageUrl: {
    type: String,
    min: 6,
    max: 1500,
  },
  postedBy: {
    type: String,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Story", StorySchema);
