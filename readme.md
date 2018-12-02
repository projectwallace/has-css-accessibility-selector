# has-css-accessibility-selector [![Build Status](https://travis-ci.org/bartveneman/has-css-accessibility-selector.svg?branch=master)](https://travis-ci.org/bartveneman/has-css-accessibility-selector) [![Known Vulnerabilities](https://snyk.io/test/github/bartveneman/has-css-accessibility-selector/badge.svg)](https://snyk.io/test/github/bartveneman/has-css-accessibility-selector) ![Dependencies Status](https://img.shields.io/david/bartveneman/has-css-accessibility-selector.svg) ![Dependencies Status](https://img.shields.io/david/dev/bartveneman/has-css-accessibility-selector.svg) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

A test to determine wether a selector contains an accessibility-related selector

## Installation

```bash
npm install has-css-accessibility-selector

# or

yarn add has-css-accessibility-selector
```

## Usage

```js
const hasAccessibilitySelector = require('has-css-accessibility-selector')

console.log(hasAccessibilitySelector('[role="menu"]'))
// => true

console.log(hasAccessibilitySelector('.nothing-to-see-here'))
// => false
```

## Related projects

- [CSS Analyzer](https://github.com/projectwallace/css-analyzer) - CSS
  statistics module
- [Wallace CLI](https://github.com/bartveneman/wallace-cli) - CSS statistics in
  your CLI
- [Color Sorter](https://github.com/bartveneman/color-sorter) - Sort CSS colors
  by hue, saturation, lightness and opacity
- [Gromit CLI](https://github.com/bartveneman/gromit-cli) - A test framework to
  assert that CSS statistics don't exceed certain thresholds.

## License

MIT © Bart Veneman
