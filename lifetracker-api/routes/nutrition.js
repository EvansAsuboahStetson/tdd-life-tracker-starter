const express = require("express");
const User = require("../models/user");
const Nutrition = require("../models/nutrition");
const router = express.Router();
const security = require("../middleware/security")

router.post("/create", security.requireAuthenticatedUser , async (req, res, next) => {
  try {
    //take user email and password and authenticate
    const { user } = res.locals
    
    const nutrition = await Nutrition.createNutrition({ user, nutrition: req.body });
    
    return res.status(200).json({ nutrition });
  } catch (err) {
    next(err);
  }
});

router.get("/",security.requireAuthenticatedUser , async (req, res, next) => {
  try {
    //take user email and password and authenticate
   const { email } = res.locals.user;
    const user = await User.fetchUserByEmail(email);

    const nutrition = await Nutrition.listNutritionUser(user);
    return res.status(200).json({ nutrition });
  } catch (err) {
    next(err);
  }
});

router.get("/id/:nutritionId", async (req, res, next) => {
  try {
    //take user email and password and authenticate
    const nutritionId = Number(req.params.nutritionId);

    const nutrition = await Nutrition.fetchNutritionById(nutritionId);
    return res.status(200).json({ nutrition });
  } catch (err) {
    next(err);
  }
});

module.exports = router