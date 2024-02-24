const z = require("zod");

const commentValidator = z.object({
  rating: z.enum(["bad", "good", "neutral"]),
  body: z.string(),
});

const postValidator = z.object({
  title: z.string().min(3),
  description: z.string(),
  category: z.string(),
  price: z.number().nonnegative().int(),
  negotiatable: z.boolean(),
  available: z.boolean().default(true),
  images: z.array(z.string()).default([]),
  deleteAt: z.date().optional(),
  createdAt: z.date().default(() => new Date()),
  view: z.number().nonnegative().int().default(0),
});

const userValidator = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullName: z.string().min(3).optional(),
  isAdmin: z.boolean().default(false),
  phoneNumber: z.string().optional(),
  whatsUpNumber: z.string().optional(),
  profileImage: z.string().optional(),
  view: z.number().nonnegative().int().default(0),
  createdAt: z.date().default(Date.now),
  address: z
    .object({
      state: z.string(),
      area: z.string(),
    })
    .optional(),
});

module.exports = {
  userValidator,
  postValidator,
  commentValidator,
};
