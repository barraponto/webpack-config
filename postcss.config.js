/* eslint-env node */
const cssnext = require('postcss-cssnext');

module.exports = {
  sourceMap: true,
  plugins: [cssnext()],
};
