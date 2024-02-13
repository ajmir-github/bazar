const express = require("express");
const adapt = require("../utils/adapt");
const { postController } = require("../controllers");
const {
  authMiddleware,
  postMiddleware,
  sharedMiddleware,
} = require("../middlewares");
const postValidator = require("../validators/postValidator");

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
    sharedMiddleware.validateBodyMiddlewareBuilder(postValidator),
    authMiddleware.onlyAuthenticated,
    postController.createPost
  )
);
postRouter.patch(
  "/:id",
  adapt(
    sharedMiddleware.validateBodyMiddlewareBuilder(postValidator.partial()),
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
