import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import pagefind from 'astro-pagefind'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'file',
    },
    legacy: {
        collections: true
      },
    site: 'https://btonomics.com',
    integrations: [tailwind(), mdx(), pagefind(), sitemap()],
    prefetch: true,
})
