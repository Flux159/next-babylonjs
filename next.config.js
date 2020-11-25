const withTM = require("next-transpile-modules")([
  "@babylonjs/core",
  "@babylonjs/gui",
  "@babylonjs/loaders",
  "react-babylonjs",
]);

module.exports = withTM();
