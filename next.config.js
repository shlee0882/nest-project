const path = require('path');

module.exports = {
  pageExtensions: ['tsx', 'ts'],
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};
