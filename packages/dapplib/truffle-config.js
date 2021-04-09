require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth range proud harvest bread tattoo gaze'; 
let testAccounts = [
"0xa8ca2d2358b8011508f3faf11276810d42b1f59fbb541f781c9c034e23d0369f",
"0x581411402255acec038a6db18b0cd398e0ca981b120e855bd1b872f70a7a246d",
"0xa842648f94ecc278bc70d36cdae1362f9be5d3e7b1be60997c0fd8f2f501d9fe",
"0xfd76c2cdff1ff927f8482ff67d892c58b50c972d2604e358cd798d4fe9e46ef7",
"0xde12bd41a56aaa9de71007887123f4cccbcf56b2606f2f84b9b6de7177f16459",
"0x667c733ffabbd7d299b520d1a287b9a5dbedc9c5eb7d429272246666132caece",
"0x0dcbaad10f543e18fd923ec45ff57ad4904ed4e6cc358b762b78da354d06544f",
"0x4f301b88f87e5033af56a825dda3592e1ab01836cac7d2c158feb138d03d4af4",
"0x776b1769e1c655ba5324844506739fc2f4ae881e8857d3642ad96afeaf7b90e6",
"0x8dfe43ba6a61ac1d7db41216f998882e0a41c72e1809e32e04e27894ef80a81c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
