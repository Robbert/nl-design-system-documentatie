// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type { Config } from '@docusaurus/types';
import footer from './footerConfig';
import navbar from './navConfig';
import nldsPrismTheme from './nldsPrism';

const config: Config = {
  title: 'NL Design System',
  tagline: 'Eén design system voor alle huisstijlen',
  url: 'https://nldesignsystem.nl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'nl-design-system', // Usually your GitHub org/user name.
  projectName: 'documentatie', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
        },
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebarConfig.ts'),
          // Please change this to your repo.
          editUrl: 'https://github.com/nl-design-system/documentatie/tree/main/',
          // Override default behaviour of Docusaurus to hide all docs which are linked in the category indicator. For some items like the introduction pages we would like to show them in the sidebar AND link them in the category.
          // According to the docs you can do so by overriding the sidebarItemsGenerator https://docusaurus.io/docs/sidebar/autogenerated#customize-the-sidebar-items-generator
          async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
            // Use default Docusaurus behaviour to generate sidebar items
            const sidebarItems = await defaultSidebarItemsGenerator(args);

            // In the _category_.json file customProps can be added to ensure the file will show up in the sidebar
            const addLinkedItemToSidebar = (item) => {
              if (item.link && item.customProps?.showLinkedDoc) {
                return { ...item, items: [item.link, ...item.items] };
              }
              return item;
            };

            return sidebarItems.map(addLinkedItemToSidebar);
          },
        },
        blog: {
          postsPerPage: 'ALL',
          blogSidebarCount: 0,
          showReadingTime: false,
        },
        theme: {
          customCss: [
            require.resolve('@nl-design-system-unstable/nlds-design-tokens/dist/root.css'),
            require.resolve('./src/css/custom.css'),
          ],
        },
      },
    ],
  ],
  themeConfig: {
    navbar,
    footer,
    prism: {
      theme: nldsPrismTheme,
      additionalLanguages: ['markup', 'jsx', 'tsx', 'json', 'js-extras', 'yaml', 'markdown', 'scss'],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 2,
    },
    colorMode: {
      disableSwitch: true,
    },
    announcementBar: {
      id: 'dsw-24',
      content:
        'Het is eindelijk Design Systems Week 2024! Elke dag korte, online talks: <a style="color: inherit" href="/events/design-systems-week-2024/programma">bekijk het programma</a>.',
      backgroundColor: '#B8E6FF',
      textColor: '#000',
      isCloseable: false,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'HS7BGF6EOX',
      // Public API key: it is safe to commit it
      apiKey: 'ce625c137581b1c1f4bdd3912398834b',
      indexName: 'nldesignsystem',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
      //... other Algolia params
    },
  },
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    localeConfigs: {
      nl: {
        htmlLang: 'nl-NL',
      },
      en: {
        htmlLang: 'en-EN',
      },
    },
  },
};

export default config;
