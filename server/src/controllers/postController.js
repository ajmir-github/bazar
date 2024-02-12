const { StatusCode } = require("../utils");
const { postServices, userServices } = require("../services");

exports.getPosts = async ({ query }) => {
  const posts = await postServices.findSomePosts(query);
  return { status: StatusCode.SUCCESS, data: posts };
};

exports.getPostById = async ({ params }) => {
  const post = await postServices.findPostByID(params.id);
  if (!post)
    return {
      status: StatusCode.NOT_FOUND,
      data: {
        message: "Post not found!",
      },
    };
  post.user = await userServices.findUserByID(post.userID);
  return {
    status: StatusCode.SUCCESS,
    data: post,
  };
};

exports.createPost = async ({ body, query }, cache) => {
  const { success, post } = await postServices.createPost(
    {
      ...body,
      userID: cache.auth._id,
    },
    query.withReturn
  );
  if (!success) throw new Error("Databaes failed to create a post!");
  return {
    status: StatusCode.CREATED,
    data: post || {
      message: "Post created!",
    },
  };
};

exports.updatePost = async ({ params, body, query }) => {
  const { success, post } = await postServices.updatePost(
    params.id,
    body,
    query.withReturn
  );
  if (!success) throw new Error("Databaes failed to update the post!");
  return {
    status: StatusCode.SUCCESS,
    data: post || {
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
