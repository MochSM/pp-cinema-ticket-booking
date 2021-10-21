const bcrypt = require('bcrypt');
const sessions = require("express-session");
const { User } = require("../models/");

class UserController {
  static getRegisterForm(req, res) {
    const { error } = req.query;
    res.render("auth/registerForm", { error, user: false });
  }

  static postRegisterForm(req, res) {
    const { username, email, password } = req.body;
    const params = { username, email, password };
    User.create(params)
      .then(() => res.redirect("/auth/login?message=success"))
      .catch((err) =>res.redirect(`/auth/register?error=${err.message.split("\n").map((el) => el.replace("Validation error: ", "")).join(".")}`));  
  }

  static getLoginForm(req, res) {
    const { message, error } = req.query;
    res.render("auth/loginForm", { message, error, user: false });
  }

  static postLoginForm(req, res) {
    const { username, password } = req.body;
    const params = { username };
    User.findOne({ where: params })
      .then((data) => {
        if(! bcrypt.compareSync(password, data.password)) res.redirect(`/auth/login?error=username or password was incorrect`);
        else {
          let session = req.session;
          const { id, username, role } = data;
          session.user = { id, username, role };
          res.redirect("/");
        }
      })
      .catch((err) => res.redirect(`/auth/login?error=username or password was incorrect`));
  }

  static logout(req, res) {
    req.session.destroy((err) => {
      if (err) res.send("error");
      else res.redirect("/");
    });
  }
}

module.exports = UserController;
