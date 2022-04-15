// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'neo-jquery',
  tagline: 'modular javasctipt library',
  url: 'https://neo-jquery.vercel.app',
  baseUrl: '/',
  noIndex: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'omega5300', // Usually your GitHub org/user name.
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
          changefreq: 'weekly',
          priority: 0.5,
        },
      ],
      [
        '@docusaurus/plugin-pwa',
        {
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
              content: 'rgb(37, 194, 160)',
            },
          ],
        },
      ]
    ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'neo-jquery, js library, stack-analyze, jquery modern, jquery alternative, jquery'}],
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
