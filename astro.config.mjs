import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import pagefind from 'astro-pagefind'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'file', // 'file' is needed for Pagefind to work
    },
    site: 'https://btonomics.com',
    integrations: [mdx(), pagefind(), sitemap()],
    vite: {
        plugins: [
            tailwindcss(),
            Icons({
                compiler: 'astro',
            }),
        ],
    },
    prefetch: true,
})
