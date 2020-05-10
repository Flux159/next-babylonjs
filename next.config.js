const withTM = require("next-transpile-modules")([
  "@babylonjs/core",
  "@babylonjs/gui",
  "@babylonjs/loaders",
]);

module.exports = withTM();
