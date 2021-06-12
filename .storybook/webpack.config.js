const path = require('path');
const { fixBabelImports } = require('customize-cra');

module.exports = ({ config }) => {
  config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules'];

  config.resolve.alias = {
    '@ui': path.resolve(__dirname, '..', 'src', 'ui'),
    '@utils': path.resolve(__dirname, '..', 'src', 'utils'),
    '@domain': path.resolve(__dirname, '..', 'src', 'domain'),
    '@application': path.resolve(__dirname, '..', 'src', 'application'),
    '@infrastructure': path.resolve(__dirname, '..', 'src', 'infrastructure'),
  };

  return fixBabelImports('import', {
    style: 'css',
    libraryName: 'antd',
    libraryDirectory: 'es',
  })(config);
};
