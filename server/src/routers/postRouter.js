const express = require("express");
const adapt = require("../utils/adapt");
const { postController } = require("../controllers");
const { authMiddleware } = require("../middlewares");

const postRouter = express.Router();

// --- postRoutes
postRouter.get("/", adapt(postController.getPosts));
postRouter.get("/:id", adapt(postController.getPostById));
postRouter.post("/", adapt(postController.createPost));
postRouter.patch(
  "/:id",
  adapt(
    authMiddleware.onlyAuthenticated,
    authMiddleware.onlyAuthorizedToMutatePost,
    postController.cachePost,
    postController.updatePost
  )
);
postRouter.delete(
  "/:id",
  adapt(
    authMiddleware.onlyAuthenticated,
    authMiddleware.onlyAuthorizedToMutatePost,
    postController.cachePost,
    postController.deletePost
  )
);

module.exports = postRouter;
