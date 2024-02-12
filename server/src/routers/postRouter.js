const express = require("express");
const adapt = require("../utils/adapt");
const { postController } = require("../controllers");
const { authMiddleware, postMiddleware } = require("../middlewares");

const postRouter = express.Router();

// --- postRoutes
postRouter.get("/", adapt(postController.getPosts));
postRouter.get("/:id", adapt(postController.getPostById));
postRouter.post(
  "/",
  adapt(authMiddleware.onlyAuthenticated, postController.createPost)
);
postRouter.patch(
  "/:id",
  adapt(
    authMiddleware.onlyAuthenticated,
    postMiddleware.cachePost,
    authMiddleware.onlyAuthorizedToMutatePost,
    postController.updatePost
  )
);
postRouter.delete(
  "/:id",
  adapt(
    authMiddleware.onlyAuthenticated,
    postMiddleware.cachePost,
    authMiddleware.onlyAuthorizedToMutatePost,
    postController.deletePost
  )
);

module.exports = postRouter;
