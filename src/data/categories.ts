import IconPalette from '~icons/noto/artist-palette'
import IconHammer from '~icons/noto/hammer'
import IconBulb from '~icons/noto/light-bulb'
import IconFaucet from '~icons/noto/potable-water'
import IconWorker from '~icons/noto/construction-worker'
import IconChair from '~icons/noto/chair'

export const categories = [
    {
        slug: 'painting-walls',
        name: 'Painting & Walls',
        icon: IconPalette, // 🎨
        description: 'Mold treatment, paint selection, and wall repairs',
        tags: ['Mold', 'Paint', 'Fungal', 'Cement', 'Nippon'],
    },
    {
        slug: 'flooring',
        name: 'Flooring',
        icon: IconHammer, // 🔨
        description: 'Vinyl, tiling, and floor protection',
        tags: ['Vinyl', 'Floor', 'Anyth', 'Bed'],
    },
    {
        slug: 'electrical-lighting',
        name: 'Electrical & Lighting',
        icon: IconBulb, // 💡
        description: 'Wiring, fans, aircon, and appliances',
        tags: ['Electronics', 'Fan', 'Hood', 'Elmark', 'Aircon'],
    },
    {
        slug: 'kitchen-bath',
        name: 'Kitchen & Bath',
        icon: IconFaucet, // 🚰
        description: 'Cabinetry, plumbing, and usage reviews',
        tags: ['Cabinet', 'Laundry', 'Kitchen', 'Baton', 'LLHF'],
    },
    {
        slug: 'contractors-reviews',
        name: 'Contractors & Reviews',
        icon: IconWorker, // 👷
        description: 'ID experiences and contractor workmanship',
        tags: ['Contractor', 'Maintenance', 'ID', 'Interesting'],
    },
    {
        slug: 'furniture-decor',
        name: 'Furniture & Decor',
        icon: IconChair, // 🪑
        description: 'Furnishing, blinds, and styling',
        tags: ['Frame', 'Furniture', 'Accessories', 'Blinds', 'Mistakle', 'Funny'],
    },
]
