const express = require("express");
// const authRouter = require("./auth");
const {
  cacheUser,
  hashPassword,
  isEmailUnique,
  createUser,
  getUserById,
  getUsers,
  deleteUser,
  updateUser,
} = require("./userControllers");
const adapt = require("../utils/adapt");
const {
  signIn,
  signUp,
  getAuth,
  cacheAuth,
  onlyAutheticatedUsers,
} = require("./authControllers");
const {
  getPosts,
  cachePost,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("./postControllers");

const apiRouter = express.Router();

// --- authRouter
apiRouter.get("/auth", adapt(getAuth));
apiRouter.post("/auth/sign-in", adapt(signIn));
apiRouter.post("/auth/sign-up", adapt(isEmailUnique, signUp));

// --- userRoutes
apiRouter.get("/user", adapt(getUsers));
apiRouter.get("/user/:id", adapt(getUserById));
apiRouter.post("/user", adapt(isEmailUnique, hashPassword, createUser));
apiRouter.patch(
  "/user/:id",
  adapt(isEmailUnique, cacheUser, hashPassword, updateUser)
);
apiRouter.delete("/user/:id", adapt(cacheUser, hashPassword, deleteUser));

// --- postRoutes
apiRouter.get("/post", adapt(getPosts));
apiRouter.get("/post/:id", adapt(getPostById));
apiRouter.post("/post", adapt(cacheAuth, onlyAutheticatedUsers, createPost));
apiRouter.patch(
  "/post/:id",
  adapt(cachePost, cacheAuth, onlyAutheticatedUsers, updatePost)
);
apiRouter.delete(
  "/post/:id",
  adapt(cachePost, cacheAuth, onlyAutheticatedUsers, deletePost)
);

module.exports = apiRouter;
