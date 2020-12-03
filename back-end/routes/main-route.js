const express = require("express");
require("dotenv").config();
const mainRouter = express.Router();
const middleware = require("../middlewares/auth");
const {
  logIn,
  register,
  home,
  follow,
  getUser,
  getFollower,
  getFollowing,
  unfollowUser,
} = require("../controllers/main-controller");
// Welcome page
mainRouter.get("/", middleware, home);
//Login/sign up users
mainRouter.post("/register", register);
mainRouter.post("/Login", logIn);
// Follow other user
mainRouter.post("/:username/Follows", middleware, follow);
// get user
mainRouter.get("/:username", middleware, getUser);
// get Follower list
mainRouter.get("/:username/Followers", getFollower);
mainRouter.get("/:username/Following", getFollowing);
mainRouter.delete("/:username/unfollow", middleware, unfollowUser);
module.exports = mainRouter;
