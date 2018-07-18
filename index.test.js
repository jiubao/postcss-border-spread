var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

test('border', () => {
  return run('a{ border: solid 1px #ccc; }', 'a{ border-width: 1px; border-style: solid; border-color: #ccc; }')
})
