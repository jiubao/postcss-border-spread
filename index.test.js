var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            // console.log('out: ', result.css)
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

/* Write tests here

it('does something', () => {
    return run('a{ }', 'a{ }', { });
});

*/

// test('does something', () => {
//     return run('a{ overflow: scroll; }', 'a{ overflow: scroll; -webkit-overflow-scrolling: touch; }', { });
// });

test('border', () => {
  return run('a{ border: solid 1px #ccc; }', 'a{ border-width: 1px; border-style: solid; border-color: #ccc; }')
})
