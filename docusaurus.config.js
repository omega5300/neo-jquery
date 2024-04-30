// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'neo-jquery',
  tagline: 'modular javasctipt library',
  url: 'https://neo-jquery.vercel.app',
  baseUrl: '/',
  noIndex: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'omega5300', // Usually your GitHub org/user name.
  trailingSlash: false,
  projectName: 'neo-jquery', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
      [
        '@docusaurus/plugin-sitemap',
        {
          id: 'sitemap-params',
          changefreq: 'weekly',
          priority: 0.5,
        },
      ],
      [
        '@docusaurus/plugin-pwa',
        {
          id: 'pwa-params',
          debug: true,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: '/img/docusaurus.png',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: '/manifest.json', // your PWA manifest
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: '#1c4d0f',
            },
          ],
        },
      ]
    ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'neo-jquery, js library, stack-analyze, jquery modern, jquery alternative, jquery'},
        {name: 'robots', content: 'index, follow'}
      ],
      navbar: {
        title: 'neo-jquery',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'docs',
          },
          {
            href: 'https://github.com/omega5300/neo-jquery/tree/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} stack-analyze.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
