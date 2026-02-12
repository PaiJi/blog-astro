import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().nullish(),
    permalink: z.string(),
    categories: z.array(z.string()).nullish(),
    tags: z.array(z.string()).nullish(),
    draft: z.boolean().nullish(),
  }),
});

export const collections = { blog };
