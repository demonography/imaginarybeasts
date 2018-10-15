// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/iriswong/Sandbox/personal/imaginarybeasts/.cache/dev-404-page.js"),
  "component---src-pages-about-js": require("gatsby-module-loader?name=component---src-pages-about-js!/Users/iriswong/Sandbox/personal/imaginarybeasts/src/pages/about.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/iriswong/Sandbox/personal/imaginarybeasts/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/iriswong/Sandbox/personal/imaginarybeasts/.cache/json/layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/iriswong/Sandbox/personal/imaginarybeasts/.cache/json/dev-404-page.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/iriswong/Sandbox/personal/imaginarybeasts/.cache/json/about.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/iriswong/Sandbox/personal/imaginarybeasts/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/iriswong/Sandbox/personal/imaginarybeasts/.cache/layouts/index.js")
}