// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

// 2. Define your collection(s)
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.mdx', base: './src/data/blog' }),
    schema: z.object({
        title: z.string(),
        pid: z.number().optional(),
        pubDate: z.date(),
        description: z.string().optional(),
        category: z.string(),
        author: z.string(),
        image: z.object({ url: z.string(), alt: z.string() }).optional(),
        tags: z.array(z.string()).optional(),
        slug: z.string().optional(),
    }),
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = { blog }
