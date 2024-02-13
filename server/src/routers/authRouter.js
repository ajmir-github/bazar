const express = require("express");
const adapt = require("../utils/adapt");
const { authController } = require("../controllers");
const { userMiddleware, sharedMiddleware } = require("../middlewares");
const userValidator = require("../validators/userValidator");

const authRouter = express.Router();

// --- authRouter
authRouter.get("/", adapt(authController.getAuth));
authRouter.post(
  "/sign-in",
  adapt(
    sharedMiddleware.validateBodyMiddlewareBuilder(
      userValidator.pick({ email: true, password: true })
    ),
    authController.signIn
  )
);
authRouter.post(
  "/sign-up",
  adapt(
    sharedMiddleware.validateBodyMiddlewareBuilder(
      userValidator.pick({ email: true, password: true })
    ),
    userMiddleware.isEmailUnique,
    userMiddleware.hashPassword,
    authController.signUp
  )
);

module.exports = authRouter;
