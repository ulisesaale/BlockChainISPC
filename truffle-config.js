const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "7c82811324474eeaa72bccd5d2dbba9";
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
      port: 8545, // Puerto de Ganache
      network_id: "*" // Cualquier ID de red
    }
  },
  compilers: {
    solc: {
      version: "^0.8.21"
    }
  }
};
