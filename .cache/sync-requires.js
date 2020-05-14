// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/nox/Sandbox/imaginarybeasts/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-about-js": preferDefault(require("/Users/nox/Sandbox/imaginarybeasts/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/nox/Sandbox/imaginarybeasts/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/nox/Sandbox/imaginarybeasts/.cache/json/layout-index.json"),
  "about.json": require("/Users/nox/Sandbox/imaginarybeasts/.cache/json/about.json"),
  "index.json": require("/Users/nox/Sandbox/imaginarybeasts/.cache/json/index.json")
}