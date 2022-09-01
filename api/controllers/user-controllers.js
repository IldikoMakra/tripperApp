let users = require("../data/user.json");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user-model");
const { registerValidation, loginValidation } = require("./validation");

const path = require("path");

// @desc    Post New User
// @route   POST /api/users/signup
// @access  UI public
const createUser = async (req, res) => {
  // validate incoming data
  const validationResult = registerValidation(req.body);
  if (validationResult.error) {
    res
      .status(400)
      .json({ status: "error", error: validationResult.error.details });
    return;
  }

  // check if user already in the DB
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    res.status(400).json({ status: "error", error: "user already exists" });
    return;
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: hashedPassword,
    city: req.body.city,
    age: req.body.age,
    imageUrl: req.body.imageUrl,
  });

  try {
    const savedUser = await user.save();
    console.log(savedUser);

    res.status(201).json({
      status: "User created successfully",
      user: user._id,
      name: user.userName,
    });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

// @desc    Get all users
// @route   GET /api/users
// @access  UI public
const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ status: "success", total: users.length, users });
  } catch (err) {
    res.status(400).json({ status: "error", error: err });
  }
};

// @desc    User Login
// @route   POST /api/users/login
// @access  UI public
const loginUser = async (req, res) => {
  // validate incoming data
  const validationResult = loginValidation(req.body);

  if (validationResult.error) {
    res
      .status(400)
      .json({ status: "error", error: validationResult.error.details });
    return;
  }

  // check if the email exitsts
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(401).json({ status: "error", error: "user not found" });
    return;
  }
  // validate password
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res
      .status(401)
      .json({ status: "error", error: "invalid password!" });

  // create and assign token
  const token = await jwt.sign(
    { userName: user.userName },
    process.env.TOKEN_SECRET,
    (err, token) => {
      res.json({ token: token, user: user.userName, id: user._id });
    }
  );
};

// @desc    Find a User by ID
// @route   GET /api/users/:id
// @access  Postman only, public - TO BE TESTED!
const getUserById = async (req, res) => {
  try {
    id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json({ status: "success", details: user });
  } catch (err) {
    res.status(400).json({ status: "error", error: err });
  }
};

// @desc    Update User Data
// @route   PATCH /api/users/:name
// @access  Postman first, without protection
const updateUser = async (req, res) => {
  try {
    console.log(req.file);
    const filter = req.params;
    const update = { imageUrl: req.file.filename };
    const result = await User.findOneAndUpdate(
      filter,
      { $set: update },
      { new: true }
    );

    res
      .status(200)
      .json({ status: "success", user: result, msg: "user updated" });
  } catch (error) {
    console.log(error.details[0]);
    res.status(400).json({ status: "error", message: error.details });
  }
};

// @desc    Reset User Password
// @route   PATCH /api/users/:email
// @access  Postman only, public
const resetPassword = async (req, res) => {
  try {
    const filter = req.params;

    const update = { password: req.body.password };

    const result = await User.findOneAndUpdate(filter, update, { new: true });

    res
      .status(400)
      .json({ status: "success", user: result, msg: "new password saved" });
  } catch (error) {
    console.log(error.details[0]);
    res.status(400).json({ status: "error", message: error.details });
  }
};

// @desc    Upload a User Image
// @route   POST /api/users/upload
// @access  Postman only - for upload test
const uploadImage = async (req, res) => {
  console.log(req.file);
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    imageUrl: req.file.filename,
  });
  const savedUser = await user.save();
  console.log(savedUser);
  res.status(201).json({ msg: "User image uploaded successfully." });
};

// @desc    Delete a User
// @route   DELETE /api/users/:id
// @access  Postman only, public - REVISION REQUIRED from mock to real DB!
const deleteUser = (req, res) => {
  const { id } = req.params;

  //filter recreates the users array without the specified item
  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the database.`);
};

module.exports = {
  createUser,
  getUser,
  loginUser,
  getUserById,
  deleteUser,
  updateUser,
  uploadImage,
  resetPassword,
};
