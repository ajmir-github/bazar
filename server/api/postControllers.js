const PostModel = require("../models/PostModel");
const { STATUS_CODE } = require("../utils/constants");

// --- Middlewares
exports.cachePost = async (request, cache) => {
  const post = await PostModel.findById(request.params.id);
  if (!post)
    return {
      status: STATUS_CODE.NOT_FOUND,
      data: {
        message: "Post not found!",
      },
    };
  cache.post = post;
};

// --- Endpoint handlers

exports.getPosts = async (request) => {
  const posts = await PostModel.find().populate("user", "profile _id fullName");
  return { status: STATUS_CODE.SUCCESS, data: posts };
};

exports.getPostById = async (request) => {
  const post = await PostModel.findById(request.params.id).populate("user");
  if (!post)
    return {
      status: STATUS_CODE.NOT_FOUND,
      data: {
        message: "Post not found!",
      },
    };
  return {
    status: STATUS_CODE.SUCCESS,
    data: post,
  };
};

exports.createPost = async (request, cache) => {
  const postInstance = new PostModel({ ...request.body, user: cache.auth._id });
  const post = await postInstance.save({ validateBeforeSave: true });
  return {
    status: STATUS_CODE.CREATED,
    data: post,
  };
};

exports.updatePost = async (request, cache) => {
  await cache.post.updateOne(request.body, { runValidators: true });
  return {
    status: STATUS_CODE.SUCCESS,
    data: {
      message: "Post updated!",
    },
  };
};

exports.deletePost = async (request, cache) => {
  await cache.post.deleteOne();
  return {
    status: STATUS_CODE.SUCCESS,
    data: {
      message: "Post deleted!",
    },
  };
};
