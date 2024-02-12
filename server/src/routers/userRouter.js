const express = require("express");
const adapt = require("../utils/adapt");
const { userController } = require("../controllers");
const { userMiddleware, authMiddleware } = require("../middlewares");

const userRouter = express.Router();

// --- userRoutes
userRouter.get("/", adapt(userController.getUsers));
userRouter.get("/:id", adapt(userController.getUserById));
userRouter.post(
  "/",
  adapt(
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
    authMiddleware.onlyAuthenticated,
    userController.cacheUser,
    authMiddleware.onlyAuthorizedToMutateUser,
    userController.deleteUser
  )
);

module.exports = userRouter;
