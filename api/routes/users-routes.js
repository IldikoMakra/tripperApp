const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  loginUser,
  getUserById,
  deleteUser,
  updateUser,
  uploadImage,
  resetPassword,
} = require("../controllers/user-controllers");
const auth = require("../middleware/auth-check");
const upload = require("../middleware/upload");

//Routes after /api/users

router.get("/", getUser);
router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/:id", getUserById);
//router.delete("/:id", deleteUser);
router.patch("/reset", resetPassword);

//Protected routes after /api/users

router.post("/upload", upload.single("imageUrl"), uploadImage);
router.patch("/:userName", upload.single("imageUrl"), updateUser);

module.exports = router;
