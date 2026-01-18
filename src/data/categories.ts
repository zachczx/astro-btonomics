import IconPalette from '~icons/noto/artist-palette'
import IconHammer from '~icons/noto/hammer'
import IconBulb from '~icons/noto/light-bulb'
import IconFaucet from '~icons/noto/potable-water'
import IconWorker from '~icons/noto/construction-worker'
import IconChair from '~icons/noto/chair'

import Flooring from './blog/honestReviews/floor-xpert-lurf-review-great-value-money-after-sales-service/IMG_20180730_211142-742x1024.jpg'
import Tap from './blog/honestReviews/4-room-bto-design-completed-home/upload_IMG_20181220_203422.jpg'
import Fan from './blog/honestReviews/taobao-ceiling-fan-review-noisy-sucks-but-pretty/IMG_20180612_194459-1024x768.jpg'
import Cabinet from './blog/honestReviews/4-room-bto-design-completed-home/upload_IMG_20180730_211743.jpg'
import Renovation from './blog/renovation/having-hdb-do-cement-screeding-for-our-bto-home/IMG-20180321-WA0001-768x1024.jpg'
import Painting from './blog/renovation/getting-nippon-paint-repaint-moldy-home/PXL_20251228_030322829.webp'

export const categories = [
    {
        slug: 'painting-walls',
        name: 'Painting & Walls',
        icon: Painting,
        description: 'Mold treatment, paint selection, and wall repairs',
        tags: ['Mold', 'Paint', 'Fungal', 'Cement', 'Nippon'],
    },
    {
        slug: 'flooring',
        name: 'Flooring',
        icon: Flooring,
        description: 'Vinyl, tiling, and floor protection',
        tags: ['Vinyl', 'Floor', 'Anyth', 'Bed'],
    },
    {
        slug: 'electrical-lighting',
        name: 'Electrical & Lighting',
        icon: Fan,
        description: 'Wiring, fans, aircon, and appliances',
        tags: ['Electronics', 'Fan', 'Hood', 'Elmark', 'Aircon'],
    },
    {
        slug: 'kitchen-bath',
        name: 'Kitchen & Bath',
        icon: Tap,
        description: 'Cabinetry, plumbing, and usage reviews',
        tags: ['Cabinet', 'Laundry', 'Kitchen', 'Baton', 'LLHF'],
    },
    {
        slug: 'contractors-reviews',
        name: 'Contractors & Reviews',
        icon: Renovation,
        description: 'ID experiences and contractor workmanship',
        tags: ['Contractor', 'Maintenance', 'ID', 'Interesting'],
    },
    {
        slug: 'furniture-decor',
        name: 'Furniture & Decor',
        icon: Cabinet,
        description: 'Furnishing, blinds, and styling',
        tags: ['Frame', 'Furniture', 'Accessories', 'Blinds', 'Mistakle', 'Funny'],
    },
]
