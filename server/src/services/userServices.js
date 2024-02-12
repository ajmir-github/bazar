const { UserCollection } = require("../utils/database");
const { filterByID } = require("./shared");

// --- QUERIES
exports.findSomeUsers = async () => {
  return await UserCollection.find().toArray();
};

exports.findUserByID = async (id) => {
  const filter = filterByID(id);
  return await UserCollection.findOne(filter);
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
