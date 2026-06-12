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
      components: {
        ThemeProvider: './src/components/DarkThemeProvider.astro',
        ThemeSelect: './src/components/DarkThemeSelect.astro',
      },
      sidebar: [
        { label: 'Overview', link: '/' },
        { label: 'How It Works', link: '/example/' },
        { label: 'Adopt In A Repo', link: '/adopt/' },
        { label: 'Rules', link: '/policy/' },
        { label: 'Enterprise Notes', link: '/enterprise/' },
        {
          label: 'Reference',
          items: [
            { label: 'Markdown Format', link: '/reference/schema/' },
            { label: 'Terms', link: '/reference/terms/' },
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
