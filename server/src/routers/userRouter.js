const express = require("express");
const { adapt, validators } = require("../utils");
const { userController } = require("../controllers");
const {
  userMiddleware,
  authMiddleware,
  sharedMiddleware,
} = require("../middlewares");

const userRouter = express.Router();

// --- userRoutes
userRouter.get("/", adapt(userController.getUsers));
userRouter.get(
  "/:id",
  adapt(sharedMiddleware.validateIDParams, userController.getUserById)
);
userRouter.post(
  "/",
  adapt(
    sharedMiddleware.validateBodyMiddlewareBuilder(validators.userValidator),
    authMiddleware.onlyAuthenticated,
    authMiddleware.onlyAdmin,
    userMiddleware.isEmailUnique,
    userMiddleware.hashPassword,
    userController.createUser
  )
);
userRouter.patch(
  "/:id",
  adapt(
    sharedMiddleware.validateBodyMiddlewareBuilder(
      validators.userValidator.partial()
    ),
    sharedMiddleware.validateIDParams,
    authMiddleware.onlyAuthenticated,
    userController.cacheUser,
    authMiddleware.onlyAuthorizedToMutateUser,
    userMiddleware.isEmailUnique,
    userMiddleware.hashPassword,
    userController.updateUser
  )
);
userRouter.delete(
  "/:id",
  adapt(
    sharedMiddleware.validateIDParams,
    authMiddleware.onlyAuthenticated,
    userController.cacheUser,
    authMiddleware.onlyAuthorizedToMutateUser,
    userController.deleteUser
  )
);

module.exports = userRouter;
