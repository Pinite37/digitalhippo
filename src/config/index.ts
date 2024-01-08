export const PRODUCT_CATEGORIES = [
    {
        label: "UI Kits",
        value: "ui_kits" as const,
        featured: [
            {
                name: 'Editor picks',
                href: '#',
                imageSrc: '/nav/ui-kits/mixed.jpg',
            },
            {
                name: 'Nouveaux Arrivage',
                href: '#',
                imageSrc: '/nav/ui-kits/blue.jpg',
            },
            {
                name: 'Les plus vendus',
                href: '#',
                imageSrc: '/nav/ui-kits/purple.jpg',
            },
        ],
    },


    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name: 'Favorite Icons Pick',
                href: '#',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'Nouveaux Arrivage',
                href: '#',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Les plus vendus',
                href: '#',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
        ],
    },
]