import { defineConfig, passthroughImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import pagefind from 'astro-pagefind'
import sitemap from '@astrojs/sitemap'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'file',
    },
    output: 'server',
    adapter: cloudflare(),
    site: 'https://btonomics.com',
    integrations: [tailwind(), mdx(), pagefind(), sitemap()],
    prefetch: true,
    // image: {
    //     service: passthroughImageService(),
    // },
})
