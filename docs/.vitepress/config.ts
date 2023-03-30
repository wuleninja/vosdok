import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  // https://vitepress.dev/reference/site-config
  defineConfig({
    base: '/vosdok/',
    title: 'Vostok',
    description: 'The Documentation',
    themeConfig: {
      // logo: './logo vostok.png',
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Features', link: '/02-features.md' },
      ],

      sidebar: [
        {
          text: 'Getting started',
          collapsed: false,
          items: [
            { text: 'Why Vostok?', link: '/intro/why' },
            { text: 'How to start', link: '/intro/start' },
          ],
        },
        {
          text: 'Core features',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/core/features' },
          ],
        },
        {
          text: 'Geen',
          collapsed: false,
          items: [
            { text: 'Intro', link: '/geen/intro' },
          ],
        },
      ],

      socialLinks: [
        { icon: 'github', link: 'https://bitbucket.org/oscaroscar/vostok' },
      ],
    },
  }),
)
