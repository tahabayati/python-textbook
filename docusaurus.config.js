// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import math from 'remark-math';
import katex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Python Textbook',
  favicon: 'img/favicon.ico',
  url: 'https://tahabayati.github.io',
  baseUrl: '/python-textbook/',
  organizationName: 'tahabayati',
  projectName: 'python-textbook',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
    localeConfigs: {
      fa: { label: 'فارسی', direction: 'rtl', htmlLang: 'fa' }
    }
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      { hashed: true, language: ['en'] }
    ]
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css'
  ],
  plugins: [],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex]
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  themeConfig: {
    mermaid: { theme: { light: 'default', dark: 'dark' } },
    navbar: { title: 'کتاب پایتون', items: [{ to: '/docs/algorithms', label: 'الگوریتم‌ها', position: 'left' }] },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula }
  }
};
export default config;
