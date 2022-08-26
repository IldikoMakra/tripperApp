const mongoose = require("mongoose");
const Story = require("./story-model");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,

    min: 3,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  city: {
    type: String,
    min: 6,
    max: 255,
  },
  age: {
    type: Number,
    min: 15,
    max: 120,
  },
  imageUrl: {
    type: String,
    min: 6,
    max: 255,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  addedStories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
