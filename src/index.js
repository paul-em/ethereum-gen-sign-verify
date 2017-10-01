var ethWallet = require('ethereumjs-wallet');
var ethUtil = require('ethereumjs-util');

exports.generateKeyPair = function generateKeyPair() {
  var wallet = ethWallet.generate();
  return {
    privateKey: wallet.getPrivateKeyString(),
    publicKey: wallet.getPublicKeyString(),
    address: wallet.getAddressString()
  };
};

exports.sign = function sign(data, privateKey) {
  var msgHash = ethUtil.rlphash(data);
  var sig = ethUtil.ecsign(msgHash, ethUtil.toBuffer(privateKey));
  return {
    r: ethUtil.bufferToHex(sig.r),
    s: ethUtil.bufferToHex(sig.s),
    v: sig.v
  };
};

exports.verify = function verify(data, signature, address) {
  var msgHash = ethUtil.rlphash(data);
  var r = ethUtil.toBuffer(signature.r);
  var s = ethUtil.toBuffer(signature.s);
  var v = signature.v;
  var signedPublicKeyBuffer = ethUtil.ecrecover(msgHash, v, r, s);
  var publicKey = ethUtil.bufferToHex(signedPublicKeyBuffer);
  return ethUtil.bufferToHex(ethUtil.pubToAddress(publicKey)) === address;
};