const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  const dms = process.env.DMS;
  const cms = process.env.CMS;
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    if (dms) {
      console.log('\nYou are running the app in dev mode');
    }
  }
  return {
    ...defaultConfig,
    i18n: {
      locales: ['en', 'fr', 'nl-NL', 'te'],
      defaultLocale: 'en',
    },
    publicRuntimeConfig: {
      DMS: dms ? dms.replace(/\/?$/, '') : 'https://openbudgetsindia.org/',
      CMS: cms ? cms.replace(/\/?$/, '') : 'oddk.home.blog',
    },
  };
};

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: { and: [/\.(js|ts|md)x?$/] },
//       use: ['@svgr/webpack'],
//     });
//     return config;
//   },
// };
