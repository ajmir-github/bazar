const { UserCollection } = require("../utils/database");
const useQueryParser = require("../utils/useQueryParser");
const { filterByID } = require("./shared");

const queryParser = useQueryParser();
// --- QUERIES

exports.findSomeUsers = async (query, projection = {}, onlyFilter = {}) => {
  const { filter, limit, skip, sort } = queryParser(query);
  console.log(projection);
  return await UserCollection.find({ ...filter, ...onlyFilter }, { projection })
    .sort(sort)
    .limit(limit)
    .skip(skip)
    .toArray();
};

exports.findUserByID = async (id, projection = {}) => {
  const filter = filterByID(id);
  return await UserCollection.findOne(filter, { projection });
};

exports.findUserByEmail = async (email) => {
  return await UserCollection.findOne({ email });
};

// --- MUTATIONS
exports.createUser = async (entries, returnCreatedUser = false) => {
  const { acknowledged, insertedId } = await UserCollection.insertOne(entries);
  if (!returnCreatedUser) return { success: acknowledged };
  const user = await UserCollection.findOne({ _id: insertedId });
  return { success: acknowledged, user };
};

exports.updateUser = async (id, newEntries, returnUpdatedUser = false) => {
  const filter = filterByID(id);
  const { acknowledged } = await UserCollection.updateOne(filter, {
    $set: newEntries,
  });
  if (!returnUpdatedUser) return { success: acknowledged };
  const user = await UserCollection.findOne({ _id: insertedId });
  return { success: acknowledged, user };
};

exports.deleteUser = async (id) => {
  const filter = filterByID(id);
  const { acknowledged } = await UserCollection.deleteOne(filter);
  return { success: acknowledged };
};
