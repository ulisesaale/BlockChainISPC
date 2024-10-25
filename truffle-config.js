const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "E3f5bl/3z/95/6X+rgEGx+3mQuKTzVjAHAaHYjTH9eaqrroF77fgQg";
const mnemonic = "bike surge flock spray table enact ask pistol tag afraid gas wolf";

module.exports = {
  networks: {
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraKey}`),
      network_id: 1, // mainnet
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    development: {
      host: "127.0.0.1",
      port: 24013, // Puerto de Ganache
      network_id: "*" // Cualquier ID de red
    }
  },
  compilers: {
    solc: {
      version: "^0.8.21"
    }
  }
};
