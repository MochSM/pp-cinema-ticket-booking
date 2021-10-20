const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get("/register", UserController.getRegisterForm);
router.post("/register", UserController.postRegisterForm);
router.get("/login", UserController.getLoginForm);
router.post("/login", UserController.postLoginForm);
router.get("/logout", UserController.logout);

module.exports = router;