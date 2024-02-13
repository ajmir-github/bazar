const z = require("zod");

module.exports = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullName: z.string().optional(),
  isAdmin: z.boolean().default(false),
});
