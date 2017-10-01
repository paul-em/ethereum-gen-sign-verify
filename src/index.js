const ethWallet = require('ethereumjs-wallet');
const ethUtil = require('ethereumjs-util');

function generateKeyPair() {
  const wallet = ethWallet.generate();
  return {
    privateKey: wallet.getPrivateKeyString(),
    publicKey: wallet.getPublicKeyString(),
    address: wallet.getAddressString(),
  };
}

function sign(data, privateKey) {
  const msgHash = ethUtil.rlphash(data);
  const sig = ethUtil.ecsign(msgHash, ethUtil.toBuffer(privateKey));
  return {
    r: ethUtil.bufferToHex(sig.r),
    s: ethUtil.bufferToHex(sig.s),
    v: sig.v,
  };
}

function verifySignature(data, signature, address) {
  const msgHash = ethUtil.rlphash(data);
  const r = ethUtil.toBuffer(signature.r);
  const s = ethUtil.toBuffer(signature.s);
  const v = signature.v;
  const signedPublicKeyBuffer = ethUtil.ecrecover(msgHash, v, r, s);
  const publicKey = ethUtil.bufferToHex(signedPublicKeyBuffer);
  return ethUtil.bufferToHex(ethUtil.pubToAddress(publicKey)) === address;
}

module.exports = {
  generateKeyPair,
  sign,
  verifySignature,
};