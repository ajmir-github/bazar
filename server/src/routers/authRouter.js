const express = require("express");
const adapt = require("../utils/adapt");
const { authController } = require("../controllers");
const { userMiddleware } = require("../middlewares");

const authRouter = express.Router();

// --- authRouter
authRouter.get("/", adapt(authController.getAuth));
authRouter.post("/sign-in", adapt(authController.signIn));
authRouter.post(
  "/sign-up",
  adapt(userMiddleware.isEmailUnique, authController.signUp)
);

module.exports = authRouter;
