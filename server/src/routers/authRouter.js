const express = require("express");
const { adapt, validators } = require("../utils");
const { authController } = require("../controllers");
const { userMiddleware, sharedMiddleware } = require("../middlewares");

const authRouter = express.Router();

// --- authRouter
authRouter.get("/", adapt(authController.getAuth));
authRouter.post(
  "/sign-in",
  adapt(
    sharedMiddleware.validateBodyMiddlewareBuilder(
      validators.userValidator.pick({ email: true, password: true })
    ),
    authController.signIn
  )
);
authRouter.post(
  "/sign-up",
  adapt(
    sharedMiddleware.validateBodyMiddlewareBuilder(
      validators.userValidator.pick({
        email: true,
        password: true,
        fullName: true,
      })
    ),
    userMiddleware.isEmailUnique,
    userMiddleware.hashPassword,
    authController.signUp
  )
);

module.exports = authRouter;
