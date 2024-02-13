const express = require("express");
const { adapt, validators } = require("../utils");
const { postController } = require("../controllers");
const {
  authMiddleware,
  postMiddleware,
  sharedMiddleware,
} = require("../middlewares");

const postRouter = express.Router();

// --- postRoutes
postRouter.get("/", adapt(postController.getPosts));
postRouter.get(
  "/:id",
  adapt(sharedMiddleware.validateIDParams, postController.getPostById)
);
postRouter.post(
  "/",
  adapt(
    sharedMiddleware.validateBodyMiddlewareBuilder(validators.postValidator),
    authMiddleware.onlyAuthenticated,
    postController.createPost
  )
);
postRouter.patch(
  "/:id",
  adapt(
    sharedMiddleware.validateBodyMiddlewareBuilder(
      validators.postValidator.partial()
    ),
    sharedMiddleware.validateIDParams,
    authMiddleware.onlyAuthenticated,
    postMiddleware.cachePost,
    authMiddleware.onlyAuthorizedToMutatePost,
    postController.updatePost
  )
);
postRouter.delete(
  "/:id",
  adapt(
    sharedMiddleware.validateIDParams,
    authMiddleware.onlyAuthenticated,
    postMiddleware.cachePost,
    authMiddleware.onlyAuthorizedToMutatePost,
    postController.deletePost
  )
);

module.exports = postRouter;
