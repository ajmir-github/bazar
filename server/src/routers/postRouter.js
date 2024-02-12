const express = require("express");
const adapt = require("../utils/adapt");
const { postController } = require("../controllers");
const { authMiddleware } = require("../middlewares");

const postRouter = express.Router();
postRouter.use(adapt(authMiddleware.protectRoutes));

// --- postRoutes
postRouter.get("/", adapt(postController.getPosts));
postRouter.get("/:id", adapt(postController.getPostById));
postRouter.post("/", adapt(postController.createPost));
postRouter.patch(
  "/:id",
  adapt(
    authMiddleware.isAuthorizedToMutatePost,
    postController.cachePost,
    postController.updatePost
  )
);
postRouter.delete(
  "/:id",
  adapt(
    authMiddleware.isAuthorizedToMutatePost,
    postController.cachePost,
    postController.deletePost
  )
);

module.exports = postRouter;
