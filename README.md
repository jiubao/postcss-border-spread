# PostCSS Border Spread [![Build Status][ci-img]][ci]

[PostCSS] plugin that spread border styles..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/jiubao/postcss-border-spread.svg
[ci]:      https://travis-ci.org/jiubao/postcss-border-spread

```css
/* Input example */
.foo {
    border: solid 1px #ccc;
}
.boo {
   border: 3px 4px;
}
```

```css
/* Output example */
.foo {
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
}
.boo {
  border-top: 3px;
  border-right: 4px;
  border-bottom: 3px;
  border-left: 4px;
}
```

## Usage

```js
postcss([ require('postcss-border-spread') ])
```

See [PostCSS] docs for examples for your environment.
