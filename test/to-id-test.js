var test = require('tap').test
var toId = require('../to-id')

test('"Inside a $34 smartphone" ☛ "inside-a-34-smartphone"', function (t) {
  t.is(toId('Inside a $34 smartphone'), 'inside-a-34-smartphone')
  t.end()
})
test('"Kore: a fast web server" ☛ "kore-a-fast-web-server"', function (t) {
  t.is(toId('Kore: a fast web server'), 'kore-a-fast-web-server')
  t.end()
})
test('" L. (YC S15) - Is Hiring " ☛ "l-yc-s15-is-hiring"', function (t) {
  t.is(toId(' L. (YC S15) - Is Hiring '), 'l-yc-s15-is-hiring')
  t.end()
})
test('"-something funky-" ☛ "something-funky"', function (t) {
  t.is(toId('-something funky-'), 'something-funky')
  t.end()
})
test('"안_형_준" ☛ "안-형-준"', function (t) {
  t.is(toId('안_형_준'), '안-형-준')
  t.end()
})
test('"Bu’aale" ☛ "bu-aale" (#4)', function (t) {
  t.is(toId('Bu’aale'), 'bu-aale')
  t.end()
})
