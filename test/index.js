var expect = require('expect.js');
var ethGSV = require('../src');

describe('Ethereum Gen Sign Verify', function() {
  it('should generate a key, signing a message and verify it', function() {
    var k = ethGSV.generateKeyPair();
    var s = ethGSV.sign(JSON.stringify({ a: 1 }), k.privateKey);
    expect(ethGSV.verify(JSON.stringify({ a: 1 }), s, k.address)).to.eql(true);
  });
});