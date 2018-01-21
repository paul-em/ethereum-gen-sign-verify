# ethereum-gen-sign-verify

* Generate an ethereum address.
* Sign any data
* Verify that data.

Working in nodejs and in the browser. That's all.

## Install

```
npm install ethereum-gen-sign-verify
```

### Docs for usage in the browser

Include the script.
``` html
<script src="node_modules/ethereum-gen-sign-verify/browser/lib.js"></script>
``` 
Now you can use the global object "ethGSV"
``` js
const keypair = ethGSV.generateKeyPair(); // keypair = { privateKey: '0xe3888eaa8bc6...', publicKey: '0xc1b8e4d...', address: '0xb24f93212....' }
const signature = ethGSV.sign('SomeDataAsString', keypair.privateKey); // signature = { r: '0x14aedb650....', s: '0x4a9aa9d436....', v: 27 }
const isValid = ethGSV.verify('SomeDataAsString', signature, keypair.address); // isValid = true
```

### Docs for usage in node.js

Similar to the browser version, just import it with require
``` js
const ethGSV = require('ethereum-gen-sign-verify');

const keypair = ethGSV.generateKeyPair(); // keypair = { privateKey: '0xe3888eaa8bc6...', publicKey: '0xc1b8e4d...', address: '0xb24f93212....' }
const signature = ethGSV.sign('SomeDataAsString', keypair.privateKey); // signature = { r: '0x14aedb650....', s: '0x4a9aa9d436....', v: 27 }
const isValid = ethGSV.verify('SomeDataAsString', signature, keypair.address); // isValid = true
```
