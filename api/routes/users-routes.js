const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  loginUser,
  getUserById,
  deleteUser,
  updateUser,
  resetPassword,
} = require("../controllers/user-controllers");

//Routes after /api/users

router.get("/", getUser);
router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);
router.patch("/reset", resetPassword);

//Protected routes after /api/users

router.patch("/update", updateUser);

module.exports = router;
