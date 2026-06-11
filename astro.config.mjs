import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://jsell-rh.github.io',
  base: '/skills-as-code',
  integrations: [
    starlight({
      title: 'Skills as Code',
      description:
        'A rigorous enterprise pattern for versioned, verifiable agent skills.',
      customCss: ['./src/styles/site.css'],
      sidebar: [
        { label: 'Overview', link: '/' },
        { label: 'Three-Level Example', slug: 'example' },
        { label: 'Policy Model', slug: 'policy' },
        {
          label: 'Reference',
          items: [
            { label: 'Resource Shape', slug: 'reference/schema' },
            { label: 'Terms', slug: 'reference/terms' },
          ],
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
  ],
});
