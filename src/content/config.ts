import { defineCollection, z } from 'astro:content';

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string().optional(),
    order: z.number().default(999), // For sorting - lower number = higher in list
  }),
});

export const collections = {
  team,
};
