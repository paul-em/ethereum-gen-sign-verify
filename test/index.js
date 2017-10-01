const expect = require('expect.js');
const ethGSV = require('../src');

describe('Ethereum Gen Sign Verify', () => {
  it('should generate a key, signing a message and verify it', () => {
    const k = ethGSV.generateKeyPair();
    const s = ethGSV.sign(JSON.stringify({ a: 1 }), k.privateKey);
    expect(ethGSV.verifySignature(JSON.stringify({ a: 1 }), s, k.address)).to.eql(true);
  });
});