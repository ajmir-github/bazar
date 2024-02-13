module.exports = (zodError) => {
  const error = zodError.flatten().fieldErrors;
  for (const field in error) error[field] = error[field].join(", ");
  return error;
};
