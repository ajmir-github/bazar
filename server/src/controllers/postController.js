const { StatusCode } = require("../utils");
const { postServices } = require("../services");

// --- Middlewares
exports.cachePost = async ({ params }, cache) => {
  const post = await postServices.findPostByID(params.id);
  if (!post)
    return {
      status: StatusCode.NOT_FOUND,
      data: {
        message: "Post not found!",
      },
    };
  cache.post = post;
};

// --- Endpoint handlers

exports.getPosts = async (request) => {
  const posts = await postServices.findSomePosts();
  return { status: StatusCode.SUCCESS, data: posts };
};

exports.getPostById = async (request) => {
  const post = await postServices.findPostByID(params.id);
  if (!post)
    return {
      status: StatusCode.NOT_FOUND,
      data: {
        message: "Post not found!",
      },
    };
  return {
    status: StatusCode.SUCCESS,
    data: post,
  };
};

exports.createPost = async ({ body }, cache) => {
  const { success } = await postServices.createPost({
    ...request.body,
    userID: cache.auth._id,
  });
  if (!success) throw new Error("Databaes failed to create a post!");
  return {
    status: StatusCode.CREATED,
    data: {
      message: "Post created!",
    },
  };
};

exports.updatePost = async ({ params, body }) => {
  const { success } = await postServices.updatePost(params.id, body);
  if (!success) throw new Error("Databaes failed to update the post!");
  return {
    status: StatusCode.SUCCESS,
    data: {
      message: "Post updated!",
    },
  };
};

exports.deletePost = async ({ params }) => {
  const { success } = await postServices.deletePost(params.id);
  if (!success) throw new Error("Databaes failed to delete the post!");
  return {
    status: StatusCode.SUCCESS,
    data: {
      message: "Post deleted!",
    },
  };
};
