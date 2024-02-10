// create a function that deeply compare an object
function isPrimative(data) {
  if (data === null) return true;
  return ["number", "string", "boolean", "undefined"].includes(typeof data);
}

function isObject(data) {
  return data && typeof data === "object" && data.constructor === Object;
}

function compare(x, y) {
  // if primative
  if (isPrimative(x) && isPrimative(y)) return x === y;
  // if array
  if (Array.isArray(x) && Array.isArray(y)) {
    if (x.length !== y.length) return false;
    return x.every((value, index) => compare(value, y[index]));
  }
  // if object
  if (isObject(x) && isObject(y))
    return compare(Object.entries(x), Object.entries(y));

  // if Date
  if (x instanceof Date && y instanceof Date) return Number(x) === Number(y);

  throw Error("Invalid data passed for comparsion!");
}

const store = new Map();

setInterval(() => {
  const now = Date.now();

  store.forEach(({ staleAt }, key) => {
    console.log({ key });
    if (staleAt < now) store.delete(key);
  });
}, 10000);

module.exports = (handler, staleAfter = 1) => {
  return async (request) => {
    const tag = request.originalUrl;
    if (!store.has(tag)) {
      const data = await handler(request);
      const staleAt = Date.now() + staleAfter * 60 * 1000;
      store.set(tag, { data, staleAt });
    }
    return store.get(tag);
  };
};
