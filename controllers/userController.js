const bcrypt = require('bcrypt');
const sessions = require("express-session");
const { User } = require("../models/");

class UserController {
  static getRegisterForm(req, res) {
    if(req.session.userId) res.redirect("/");
    else {
      const { error } = req.query;
      res.render("auth/registerForm", { error, loggedIn: false });
    }
  }

  static postRegisterForm(req, res) {
    if(req.session.userId) res.redirect("/");
    else {
      const { username, email, password } = req.body;
      const params = { username, email, password };
      User.create(params)
        .then(() => res.redirect("/auth/login?message=success"))
        .catch((err) =>res.redirect(`/auth/register?error=${err.message.split("\n").map((el) => el.replace("Validation error: ", "")).join(".")}`));
    }
  }

  static getLoginForm(req, res) {
    if(req.session.userId) res.redirect("/");
    else {
      const { message, error } = req.query;
      res.render("auth/loginForm", { message, error, loggedIn: false });
    }
  }

  static postLoginForm(req, res) {
    if(req.session.userId) res.redirect("/");
    else {
      const { username, password } = req.body;
      const params = { username };
      User.findOne({ where: params })
        .then((data) => {
          if(! bcrypt.compareSync(password, data.password)) res.redirect(`/auth/login?error=username or password was incorrect`);
          let session = req.session;
          session.userId = data.id;
          session.username = data.username;
          res.redirect("/");
        })
        .catch((err) => {
          res.redirect(`/auth/login?error=username or password was incorrect`);
        });
    }
  }

  static logout(req, res) {
    req.session.destroy((err) => {
      if (err) res.send("error");
      else res.redirect("/");
    });
  }
}

module.exports = UserController;
