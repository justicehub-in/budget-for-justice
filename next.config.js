const withTM = require('next-transpile-modules')(['echarts', 'zrender']);
// const withTM = require('next-transpile-modules')(['d3-fetch']);

module.exports = withTM({
  i18n: {
    locales: ['en', 'fr', 'nl-NL', 'te'],
    defaultLocale: 'en',
  },
  publicRuntimeConfig: {
    DMS: 'https://justicehub.in',
    CMS: 'https://oddk.home.blog',
  },
});
