// FILTER
// -------------- With strings
// ?filter=name::ajmir  - stricty direct
// ?filter=name:has:ajmir - regExp
// ?filter=name:in:ali, mohamda, esmta  - stricty direct
// -------------- With numbers
// ?filter=qty::1  -  equal
// ?filter=price:gt:200 - $gte greater than
// ?filter=name:lt:500 - $lte less than
// ?filter=price:gte:200 - $gte greater than or equal
// ?filter=name:lte:500 - $lte less than or equal
// ?filter=type:in:1, 2, 3 - $in  in he list
// ?filter=qty:ne:1  - $ne not equal
// ?filter=type:nin:1, 2, 3 - $in not in the list

// -------------- With Multi params (only with and)
// ?filter=type:eq:1:and:price:gt:1000
// ?filter=type:eq:1:and:price:gt:1000:and:price:lte:2000

const OPERATOR = {
  IS: "::",
  HAS: ":has:",
  NOT_EQUAL: ":ne:",
  GREATER_THAN: ":gt:",
  GREATER_THAN_OR_EQUAL: ":gte:",
  LESS_THAN: ":lt:",
  LEES_THEN_OR_EQUAL: ":lte:",
  IS_IN: ":in:",
  NOT_IN: ":not-in:",
};

const FUNCTION = {
  AND: ":and:",
  OR: ":or:",
  SEPERATOR: ",",
};

const SORT = {
  ASC: "asc",
  DESC: "desc",
};
const SORT_ORDER = {
  ASC: 1,
  DESC: -1,
};

const filterQueryParser = (filter) => {
  const query = {};
  const singleInject = (key, value) => {
    query[key] = value;
  };
  const multiInject = (key, value) => {
    if (query[key]) {
      query[key] = { ...query[key], ...value };
    } else {
      query[key] = value;
    }
  };
  // split the statements and proccess them
  for (const statement of filter.split(FUNCTION.AND)) {
    // if empty
    if (!statement) continue;
    for (const operator of Object.values(OPERATOR)) {
      // if operator found
      if (statement.indexOf(operator) !== -1) {
        // split the statement to get key-value pairs
        const [key, value] = statement.split(operator);
        // skip invalid entries
        if (!key || !value) continue;
        switch (operator) {
          case OPERATOR.IS:
            singleInject(key, value);
            break;
          case OPERATOR.HAS:
            singleInject(key, {
              $regex: value,
              $options: "im",
            });
            break;
          case OPERATOR.NOT_EQUAL:
            singleInject(key, { $ne: value });
            break;
          case OPERATOR.GREATER_THAN:
            multiInject(key, { $gt: value });
            break;
          case OPERATOR.GREATER_THAN_OR_EQUAL:
            multiInject(key, { $gte: value });
            break;
          case OPERATOR.LESS_THAN:
            multiInject(key, { $lt: value });
            break;
          case OPERATOR.LEES_THEN_OR_EQUAL:
            multiInject(key, { $lte: value });
            break;
          case OPERATOR.IS_IN:
            singleInject(key, {
              $in: value.split(FUNCTION.SEPERATOR).map((str) => str.trim()),
            });
            break;
          case OPERATOR.NOT_IN:
            singleInject(key, {
              $nin: value.split(FUNCTION.SEPERATOR).map((str) => str.trim()),
            });
            break;

          default:
            singleInject(key, value);
            break;
        }
        // END
      }
    }
  }
  // DONE
  return query;
};

// ?sort=dof::asc:and:createdAt::desc
const sortQueryParser = (sort) => {
  // custom
  const sortQuery = {};
  for (const statement of sort.split(FUNCTION.AND)) {
    const [key, value] = statement.split(OPERATOR.IS);
    if (value) {
      // complex
      switch (value) {
        case SORT.ASC:
          sortQuery[key] = SORT_ORDER.ASC;
          break;
        case SORT.DESC:
          sortQuery[key] = SORT_ORDER.DESC;
          break;
        default:
          sortQuery[key] = SORT_ORDER.ASC;
          break;
      }
    } else {
      // simple
      sortQuery[key] = SORT_ORDER.ASC;
    }
  }
  // DONE
  return sortQuery;
};

// ?select=+username,+password,-_id
const projectionParser = (projection) => {
  const projectionQuery = {};
  const statements = projection
    .split(FUNCTION.SEPERATOR)
    .map((statement) => statement.trim());
  for (const statement of statements) {
    if (statement.startsWith("-")) {
      projectionQuery[statement.slice(1)] = false;
    } else {
      projectionQuery[statement] = true;
    }
  }
  return projectionQuery;
};

module.exports =
  (
    defaultFilter = {},
    defaultSort = {},
    defaultLimit = 16,
    defaultSkip = 0,
    defaultProjection = {}
  ) =>
  ({ filter, sort, limit, skip, projection }) => {
    return {
      filter: filter
        ? { ...defaultFilter, ...filterQueryParser(filter) }
        : defaultFilter,
      sort: sort ? { ...defaultSort, ...sortQueryParser(sort) } : defaultSort,
      projection: projection
        ? { ...defaultProjection, ...projectionParser(projection) }
        : defaultProjection,
      limit: limit ? parseInt(limit) : defaultLimit,
      skip: skip ? parseInt(skip) : defaultSkip,
    };
  };
