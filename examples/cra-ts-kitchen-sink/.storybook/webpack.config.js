const util = require('util');

const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');


module.exports = (baseConfig, env, config) => {
  console.log(util.inspect({ baseConfig, env, config }, false, 15, true));
  config.plugins.push(new TSDocgenPlugin()); // optional
  return config;
};