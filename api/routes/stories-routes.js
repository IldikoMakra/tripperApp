const express = require("express");
const storiesRouter = express.Router();
const {
  getAllStory,
  getUserStory,
  createStory,
  editStory,
  deleteStory,
} = require("../controllers/story-controllers");
const auth = require("./auth");

//Private routes after /api/stories
storiesRouter.post("/", auth, createStory);
storiesRouter.patch("/:id", editStory);
storiesRouter.delete("/:id", auth, deleteStory);

//Public routes after /api/stories
storiesRouter.get("/all", getAllStory);
storiesRouter.get("/user", getUserStory);

module.exports = storiesRouter;
