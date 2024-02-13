const pattern = new RegExp("^[0-9a-fA-F]{24}$");
module.exports = (id) => pattern.test(id);
