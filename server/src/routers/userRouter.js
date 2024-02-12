const express = require("express");
const adapt = require("../utils/adapt");
const { userController } = require("../controllers");
const { userMiddleware, authMiddleware } = require("../middlewares");

const userRouter = express.Router();

userRouter.use(adapt(authMiddleware.protectRoutes));

// --- userRoutes
userRouter.get("/", adapt(userController.getUsers));
userRouter.get("/:id", adapt(userController.getUserById));
userRouter.post(
  "/",
  adapt(
    userMiddleware.isEmailUnique,
    userMiddleware.hashPassword,
    userController.createUser
  )
);
userRouter.patch(
  "/:id",
  adapt(
    authMiddleware.isAuthorizedToMutateUser,
    userMiddleware.isEmailUnique,
    userController.cacheUser,
    userMiddleware.hashPassword,
    userController.updateUser
  )
);
userRouter.delete(
  "/:id",
  adapt(
    authMiddleware.isAuthorizedToMutateUser,
    userController.cacheUser,
    userController.deleteUser
  )
);

module.exports = userRouter;
