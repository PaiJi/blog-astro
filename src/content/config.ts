import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Transform string to Date object
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),

    date: z.coerce.date(),
    permalink: z.string(),
    categories: z.array(z.string()).optional().nullable(),
    tags: z.array(z.string()).optional().nullable(),
    photos: z.array(z.string()).optional().nullable(),
  }),
});

export const collections = { blog };
