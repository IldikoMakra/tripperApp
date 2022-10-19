const Story = require("../models/story-model");
const User = require("../models/user-model");
// ----------- PUBLIC ACCESS -----------

// @desc    Get all stories from the DB
// @route   GET /api/stories/all
// @access  UI public
const getAllStory = async (req, res) => {
  try {
    const result = await Story.find({});
    res.json({ status: "success", total: result.length, result });
  } catch (err) {
    res.status(400).json({ status: "error", message: err });
  }
};

// @desc    Get all stories of one selected user
// @route   GET /api/stories/user
// @access  UI public
const getUserStory = async (req, res) => {
  try {
    const result = await Story.find({ postedBy: req.body.postedBy });
    res.json({ status: "success", total: result.length, result });
  } catch (err) {
    res.status(400).json({ status: "error", message: err });
  }
};

// ----------- PRIVATE ACCESS -----------

// @desc    Create new story
// @route   POST /api/stories
// @access  UI private

const createStory = async (req, res) => {
  const story = new Story({
    target: req.body.target,
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imgageUrl,
    postedBy: req.body.postedBy,
  });

  const creatorUser = await User.findOne({ userName: req.body.postedBy });

  try {
    if (!creatorUser) {
      res.status(404).json({ status: "error", error: "user not found." });
      return;
    }

    const savedStory = await story.save();
    console.log(savedStory);
    creatorUser.addedStories.push(story);
    creatorUser.save();

    res.status(201).json({
      status: "success",
      message: "new story was created",
      details: savedStory,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "error", message: err.details });
  }
};

// @desc    Edit one existing story
// @route   PATCH /api/stories/:storyid
// @access  UI private
const editStory = async (req, res) => {
  try {
    const _id = req.params.id;

    const update = req.body;
    const result = await Story.findByIdAndUpdate(
      _id,
      { $set: update },
      { new: true }
    );

    res
      .status(200)
      .json({ status: "success", story: result, msg: "story updated" });
  } catch (error) {
    console.log(error.details[0]);
    res.status(400).json({ status: "error", message: error.details });
  }
};

// @desc    Delete one story from the DB
// @route   DELETE /api/stories/:storyid
// @access  UI private
const deleteStory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Story.findOneAndDelete({ _id: id });
    res.json({ status: "success", deleted: result });
  } catch (err) {
    res.status(400).json({ status: "error", message: err });
  }
};

module.exports = {
  createStory,
  getAllStory,
  getUserStory,
  editStory,
  deleteStory,
};
