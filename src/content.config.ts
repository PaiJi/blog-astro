import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/blog",
  }),
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
