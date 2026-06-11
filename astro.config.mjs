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
        { label: 'Quickstart', slug: 'quickstart' },
        {
          label: 'Design',
          items: [
            { label: 'System Model', slug: 'architecture' },
            { label: 'Enterprise Controls', slug: 'enterprise-controls' },
            { label: 'Threat Model', slug: 'threat-model' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Schema', slug: 'reference/schema' },
            { label: 'AIBOM', slug: 'reference/aibom' },
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
