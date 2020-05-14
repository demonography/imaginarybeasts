// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-js": require("gatsby-module-loader?name=component---src-pages-about-js!/Users/nox/Sandbox/imaginarybeasts/src/pages/about.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/nox/Sandbox/imaginarybeasts/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/nox/Sandbox/imaginarybeasts/.cache/json/layout-index.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/nox/Sandbox/imaginarybeasts/.cache/json/about.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/nox/Sandbox/imaginarybeasts/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/nox/Sandbox/imaginarybeasts/.cache/layouts/index.js")
}