const { StatusCode } = require("../utils");
const { postServices } = require("../services");

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
