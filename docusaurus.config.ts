import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pieces for Developers',
  tagline: 'Learn how to best use and optimize your workflow with Pieces for Developers! Read the sections in sequential order or click the links in the navigation on the right to get directly to the topic you need.',
  favicon: 'assets/pieces_logos/white_circle.svg',

  // Set the production url of your site here
  url: 'https://docs.pieces.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pieces-app',
  projectName: 'documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // plugins: [
  //   [
  //     'vercel-analytics',
  //     {
  //        debug: true,
  //         mode: 'auto',
  //     },
  //   ],
    // [
    //   '@docusaurus/plugin-ideal-image',
    //   {
    //     quality: 70,
    //     max: 1030, // max resized image's size.
    //     min: 640, // min resized image's size. if original is lower, use that size.
    //     steps: 2, // the max number of images generated between min and max (inclusive)
    //     disableInDev: false,
    //   },
    // ],
    // [
    //   "docusaurus-plugin-openapi-docs",
    //   {
    //     id: "openapi",
    //     docsPluginId: "classic", // e.g. "classic" or the plugin-content-docs id
    //     config: {
    //       sdk: {
    //         // specPath: "openapi/sdk.yaml", // path or URL to the OpenAPI spec
    //         specPath: '/Users/pieces/IdeaProjects/generated_runtime/spec/modules/auth0/runtime_auth0_module.yaml',
    //         outputDir: "docs/api/sdk", // output directory for generated *.mdx and sidebar.js files
    //         sidebarOptions: {
    //           groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
    //         },
    //       }
    //     }
    //   },
    // ],
  // ],

  // themes: ["docusaurus-theme-openapi-docs"],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'learn',
          routeBasePath: 'learn',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/pieces-app/documentation/tree/main/',
          // docItemComponent: "@theme/ApiItem"
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'GTM-K8C6QWB',
          anonymizeIP: true,
        }
      } satisfies Preset.Options,
    ],
    // [
    //   'redocusaurus',
    //   {
    //     // Plugin Options for loading OpenAPI files
    //     specs: [
    //       {
    //         spec: '/Users/pieces/IdeaProjects/generated_runtime/spec/common/runtime_common_library.yaml',
    //         route: '/api/common',
    //         id: 'common',
    //       },
    //       {
    //         spec: '/Users/pieces/IdeaProjects/generated_runtime/spec/modules/connector/connector.openapi.yaml',
    //         route: '/api/connector',
    //         id: 'connector'
    //       },
    //       {
    //         spec: '/Users/pieces/IdeaProjects/generated_runtime/spec/modules/core/isomorphic.openapi.yaml',
    //         route: '/api/core',
    //         id: 'core'
    //       },
    //     ],
    //     theme: {
    //       primaryColor: 'rgb(183,183,183)',
    //     },
    //   },
    // ],
  ],

  themeConfig: {
    image: 'assets/pfd_preview.png',
    metadata: [
      {
        name: 'description',
        content: 'Pieces for Developers Documentation',
      },
      {
        name: 'og:description',
        content: 'Pieces for Developers Documentation',
      },
      {
        name: 'og:image',
        content: 'assets/pfd_preview.png',
      },
      {
        name: 'og:image:alt',
        content: 'Pieces for Developers',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:image',
        content: 'assets/pfd_preview.png',
      },
      {
        name: 'twitter:image:alt',
        content: 'Pieces for Developers',
      },
    ],
    navbar: {
      // title: 'Pieces for Developers',
      logo: {
        alt: 'Pieces for Developers',
        src: 'assets/pieces_logos/wordmark.svg',
        srcDark: 'assets/pieces_logos/white_wordmark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'learnSidebar',
          label: 'Learn',
          position: 'right',
        },
        // {
        //   label: 'Build',
        //   position: 'right',
        //   items: [
        //     {
        //       label: 'Common API',
        //       to: '/api/common',
        //     },
        //     {
        //       label: 'Connector API',
        //       to: '/api/connector',
        //     },
        //     {
        //       label: 'Core API',
        //       to: '/api/core',
        //     },
        //   ],
        // },
        {
          to: '/learn/community',
          label: 'Community',
          position: 'right',
        },
        {
          to: '/learn/support',
          label: 'Support',
          position: 'right',
        },
        {
          to: '/learn/faq',
          label: 'FAQ',
          position: 'right',
        },
        {
          href: 'https://github.com/pieces-app/documentation',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      links: [
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Join our community',
        //       href: '/learn/community',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.gg/getpieces',
        //     },
        //   ],
        // },
        // {
        //   title: 'Social Media',
        //   items: [
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/getpieces',
        //     },
        //     {
        //       label: 'YouTube',
        //       href: 'https://youtube.com/@getpieces',
        //     },
        //   ],
        // },
        {
          title: 'Terms & Policies',
          items: [
            {
              label: 'Privacy Policy',
              href: '/learn/privacy-policy',
            },
            {
              label: 'Terms of Service',
              href: '/learn/terms',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mesh Intelligent Technologies, Inc. All rights reserved.`,
    },


    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: 'KTOXFODR65',
      apiKey: '79c81e52460257d3761ea38438e29637',
      indexName: 'pieces',
    },
    colorMode: {
      defaultMode: 'dark',
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
