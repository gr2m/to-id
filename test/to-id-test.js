/* global describe, it, expect */
var toId = require('../to-id')

describe('toId(name)', function () {
  it('"Inside a $34 smartphone" ☛ "inside-a-34-smartphone"', function () {
    expect(toId('Inside a $34 smartphone')).to.equal('inside-a-34-smartphone')
  })
  it('"Kore: a fast web server" ☛ "kore-a-fast-web-server"', function () {
    expect(toId('Kore: a fast web server')).to.equal('kore-a-fast-web-server')
  })
  it('" L. (YC S15) - Is Hiring " ☛ "l-yc-s15-is-hiring"', function () {
    expect(toId(' L. (YC S15) - Is Hiring ')).to.equal('l-yc-s15-is-hiring')
  })
  it('"-something funky-" ☛ "something-funky"', function () {
    expect(toId('-something funky-')).to.equal('something-funky')
  })
  it('"안_형_준" ☛ "안-형-준"', function () {
    expect(toId('안_형_준')).to.equal('안-형-준')
  })
  it('"Bu’aale" ☛ "bu-aale" (#4)', function () {
    expect(toId('Bu’aale')).to.equal('bu-aale')
  })
})
