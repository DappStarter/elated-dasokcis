require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift rate magic hospital hidden brave fresh gasp'; 
let testAccounts = [
"0xc4b3afa8e428942d8b2abddc958609d01e12f345f018efcb986d10e3ea41cf8d",
"0xeea74dbfee7a98b77cbd19d1481a462584de1091b6a9db47ece747ded710456f",
"0xf8b77cda3b0a809e38944645fd5ff4d88cefac2c38d6a266680f744069365e34",
"0x810857934a133cc8f13065d23c38abf5e0f2676b206499ce7a999b416a87f947",
"0x0d0cd49b5256b04c988d3693364403d5e2cbbe8559b7c9c07ed3532eb4270596",
"0x7ae7e5fcf6c5108c4d424d3b580e81de9b8fd902e4ecd3ad548eea9dce556742",
"0x0f55839a4ff66a75c393859b0010bca1d7997917ff0c87657f1b70de264b7533",
"0x47f2d8bccd81706b4d30c7e19bbe43ac126adbb15004e9b06369ea66e41c1f99",
"0x08f4662bc6718d310823868e3d3a9446e057f01b23d718d0b84afb51af6054e4",
"0x67b36530cd295adf2ec9b22feab98a173aab157356a54624ff7a3b2de6c992e7"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
