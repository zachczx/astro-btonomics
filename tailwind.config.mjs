/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Nunito Sans'],
            serif: ['Roboto Slab Variable'],
        },
    },
    daisyui: {
        themes: [
            {
                night: {
                    ...require('daisyui/src/theming/themes')['night'],
                    'base-300': '#020204',
                },
            },
        ],
    },
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
