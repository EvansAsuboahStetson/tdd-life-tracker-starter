const express = require("express");
const User = require("../models/user");
const router = express.Router();

const { createUserJwt } = require("../utils/tokens");
const security = require("../middleware/security");
const Nutrition = require("../models/nutrition");

// router.post("/login", async (req, res, next) => {
//     try {
//         //take user email and password and authenticate
//         const user = await User.login(req.body)
//         return res.status(200).json({ user })

//     }
//     catch (err)
//     {
//         next(err)
//     }
// })
router.post("/login", async (req, res, next) => {
  try {
    const user = await User.login(req.body);

    const token = createUserJwt(user);
    return res.status(200).json({ user, token });
  } catch (err) {
    next(err);
  }
});

// router.post("/register", async (req, res, next) => {
//     try {
//         //Take user email and others to create new account
//         const user = await User.register(req.body)
//         return res.status (201).json({user})

//     }
//     catch (err)
//     {
//         next(err)
//     }
// })

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.register({ ...req.body });
    const token = createUserJwt(user);

    return res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
});

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { email } = res.locals.user;
    const user = await User.fetchUserByEmail(email);

    const nutrition = await Nutrition.listNutritionUser(user);
    const publicUser = await User.makePublicUser(user);
    console.log(publicUser);

    return res.status(200).json({ user: publicUser, nutrition: nutrition });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
