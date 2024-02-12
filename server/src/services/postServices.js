const { PostCollection } = require("../utils/database");
const useQueryParser = require("../utils/useQueryParser");
const { filterByID } = require("./shared");

const queryParser = useQueryParser();
// --- QUERIES
exports.findSomePosts = async (query, onlyFilter = {}) => {
  const { filter, limit, skip, sort, projection } = queryParser(query);
  return await PostCollection.find({ ...filter, ...onlyFilter }, { projection })
    .sort(sort)
    .limit(limit)
    .skip(skip)
    .toArray();
};

exports.findPostByID = async (id) => {
  const filter = filterByID(id);
  return await PostCollection.findOne(filter);
};

// --- MUTATIONS
exports.createPost = async (entries, returnCreatedPost = false) => {
  const { acknowledged, insertedId } = await PostCollection.insertOne(entries);
  if (!returnCreatedPost) return { success: acknowledged };
  const post = await PostCollection.findOne({ _id: insertedId });
  return { success: acknowledged, post };
};

exports.updatePost = async (id, newEntries, returnUpdatedPost = false) => {
  const filter = filterByID(id);
  const { acknowledged } = await PostCollection.updateOne(filter, {
    $set: newEntries,
  });
  if (!returnUpdatedPost) return { success: acknowledged };
  const post = await PostCollection.findOne({ _id: insertedId });
  return { success: acknowledged, post };
};

exports.deletePost = async (id) => {
  const filter = filterByID(id);
  const { acknowledged } = await PostCollection.deleteOne(filter);
  return { success: acknowledged };
};
