# PostCSS Border Spread [![Build Status][ci-img]][ci]

[PostCSS] plugin that spread border styles.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/jiubao/postcss-border-spread.svg
[ci]:      https://travis-ci.org/jiubao/postcss-border-spread

```css
/* Input example */
.foo {
    border: solid 1px #ccc;
}
```

```css
/* Output example */
.foo {
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
}
```

## Usage

```js
postcss([ require('postcss-border-spread') ])
```

See [PostCSS] docs for examples for your environment.
