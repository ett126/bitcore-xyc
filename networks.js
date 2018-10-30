var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('f1a585c0'),
  addressVersion: 28,
  privKeyVersion: 128,
  P2SHVersion: 78,
  bech32Prefix: 'xyc',
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('00000010ed34e226ed31c5f84e8e2d6f72bb0f7e4d14fe1fb05b7da428715981'),
    merkle_root: hex('082c2651a8735b696ad502c09d5ffcae11e7b8b8692df5f336861e2f712690a4'),
    height: 0,
    nonce: 4454047,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1522681200,
    bits: 503382015,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 8543
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  bech32Prefix: 'txyc',
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('0000003D6E61A4054D58905C85F390B0E4E3EB0E1AA4B86A098C1B5D24754ABF'),
    merkle_root: hex('082C2651A8735B696AD502C09D5FFCAE11E7B8B8692DF5F336861E2F712690A4'),
    height: 0,
    nonce: 5990674,
    version: 4,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1522681200,
    bits: 503382015,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
