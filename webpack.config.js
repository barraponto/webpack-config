const path = require('path');

module.exports = {
  // Use path.join para evitar problemas com o Windows
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  }
};
