const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const User = require("./../models/user.model");

// Signup (post)
router.post("/signup", (req, res) => {
  const {
    email,
    password,
    role,
    photo,
    name,
    lastname,
    age,
    gender,
    height,
    weight,
  } = req.body;
  console.log(req.body);
  User.findOne({ email })
    .then((user) => {
      if (user) {
        res.status(400).json({ code: 400, message: "Email already exits" });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      User.create({
        email,
        password: hashPass,
        photo,
        name,
        lastname,
        age,
        gender,
        height,
        weight,
      })
        .then(() => res.json({ code: 200, message: "User created" }))
        .catch((err) =>
          res.status(500).json({
            code: 500,
            message: "DB error while creating user",
            err: err.message,
          })
        );
    })
    .catch((err) =>
      res.status(500).json({
        code: 500,
        message: "DB error while fetching user",
        err: err.message,
      })
    );
});

// Login (post)
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        res.status(401).json({
          code: 401,
          message: "Email not registered",
        });
        return;
      }

      if (bcrypt.compareSync(password, user.password) === false) {
        res.status(401).json({ code: 401, message: "Incorrect password" });
        return;
      }

      req.session.currentUser = user;
      res.json(req.session.currentUser);
    })
    .catch((err) =>
      res.status(500).json({
        code: 500,
        message: "DB error while fetching user",
        err: err.message,
      })
    );
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => res.json({ mssage: "Logout successful" }));
});

router.post("/isloggedin", (req, res) => {
  req.session.currentUser
    ? res.json(req.session.currentUser)
    : res.status(401).json({ code: 401, message: "Unauthorized" });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;

  //req.session.currentUser._id
  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((user) => {
      req.session.currentUser = user;
      res.status(200).json({ user, message: "user edited" });
    })
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error editing", err })
    );
});

module.exports = router;
