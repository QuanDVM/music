const requireModule = require.context(
  '.', false, /\.js$/,
);

const modules = {};

requireModule.keys().forEach((fileName) => {
  
});