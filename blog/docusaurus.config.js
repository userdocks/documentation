// @ts-check
const baseDocusaurus = require('../docusaurus.base');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...baseDocusaurus,
  title: 'Blog',
  tagline: '',
  url: 'https://blog.userdocks.com',
  staticDirectories: ['../static'],
  themeConfig: {
    ...baseDocusaurus.themeConfig,
    navbar: {
      // @ts-ignore
      ...baseDocusaurus.themeConfig?.navbar,
      title: 'userdocks',
      items: [
        {
          to: '/',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://docs.userdocks.com',
          label: 'Documentation',
          position: 'left',
        },
        // @ts-ignore
        ...baseDocusaurus.themeConfig.navbar.items,
      ],
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          path: 'pages',
          editUrl: 'https://github.com/userdocks/public-resources/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('../src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;
