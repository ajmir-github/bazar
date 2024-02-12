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

// create and object that smartly stores the caches
class ProxyCache {
  constructor(numberOfCaches = 10) {
    this.numberOfCaches = numberOfCaches;
    this.cache = [];
  }
  set(args, result) {
    const newCacheElement = [args, result];
    if (this.cache.length <= this.numberOfCaches - 1)
      return this.cache.push(newCacheElement);
    this.cache.pop();
    this.cache.unshift(newCacheElement);
  }
  has(args) {
    return this.cache.some(([tArgs]) => compare(args, tArgs));
  }
  get(args) {
    return this.cache.find(([tArgs]) => compare(args, tArgs));
  }
}

// create a proxy that memoized the last N number of execuations
function memoize(fn) {
  const cache = new ProxyCache();
  return (...args) => {
    const isCached = cache.has(args);
    if (!isCached) {
      const result = fn(...args);
      cache.set(args, result);
    }
    return cache.get(args);
  };
}

module.exports = memoize;
