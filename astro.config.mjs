// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import Icons from 'unplugin-icons/vite';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Matt Nanney CFII',
            components: {
                // Override the default SocialIcons component
            },
            plugins: [
                starlightBlog({
                    authors: {
                        matt: {
                            name: 'Matt Nanney',
                            title: 'CFII',
                            picture: '/PortraitSquare.jpg',
                            url: 'https://mattnanney.net',
                        },
                    },
                })
            ],
            social: [
                { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/matt_nanney/'},
                { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/mattnanney'},
            ],
            sidebar: [
                {
                    label: 'Instrument',
                    autogenerate: { directory: 'acs'},

                },
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Example Guide', slug: 'guides/example' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],
    vite: {
        plugins: [
            Icons({
                compiler: 'astro',
            }),
        ],
    },
});
