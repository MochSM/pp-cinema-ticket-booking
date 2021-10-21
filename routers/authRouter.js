const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// session middleware
router.use((req, res, next) => {
  req.session.userId ? res.redirect('/') : next()
})

router.get("/register", UserController.getRegisterForm);
router.post("/register", UserController.postRegisterForm);
router.get("/login", UserController.getLoginForm);
router.post("/login", UserController.postLoginForm);
router.get("/logout", UserController.logout);

module.exports = router;