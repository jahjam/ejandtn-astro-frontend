import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const dayTickets = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    writtenDate: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, 'day-tickets': dayTickets };
