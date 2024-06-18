// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'
// 2. Define your collection(s)
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        id: z.number(),
        tags: z.array(z.string()),
        image: z.object({ url: z.string(), alt: z.string() }).optional(),
        author: z.string().default('ZC'),
        pubDate: z.date(),
    }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    blog: blogCollection,
}
