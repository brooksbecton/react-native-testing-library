/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const repoUrl = 'https://github.com/callstack/react-native-testing-library';

const siteConfig = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // docs folder path relative to website dir.
          path: './docs',
          // sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.json'),
        },
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      },
    ],
  ],

  baseUrl: '/react-native-testing-library/', // Base URL for your project
  tagline: 'Helps you to write better tests with less effort.',
  title: 'React Native Testing Library', // Title for your website.
  url: 'https://callstack.github.io', // Your website URL
  // favicon: 'img/favicon.png',
  organizationName: 'callstack',
  // Used for publishing and more
  projectName: 'react-native-testing-library',
  // Add custom scripts here that would be placed in <script> tags.
  favicon: 'img/favicon.png',

  themeConfig: {
    image: 'img/docusaurus.png',
    navbar: {
      logo: {
        alt: 'React Native Testing Library',
        src: 'img/owl.png',
      },
      links: [
        { to: '/', label: 'React Native Testing Library' },
        { to: 'getting-started', label: 'Docs', position: 'right' },
        { href: repoUrl, label: 'GitHub', position: 'right' },
      ],
    },
  },
};

module.exports = siteConfig;
