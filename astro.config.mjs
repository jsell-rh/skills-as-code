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
        { label: 'How It Works', slug: 'example' },
        { label: 'Adopt In A Repo', slug: 'adopt' },
        { label: 'Rules', slug: 'policy' },
        { label: 'Enterprise Notes', slug: 'enterprise' },
        {
          label: 'Reference',
          items: [
            { label: 'Markdown Format', slug: 'reference/schema' },
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
