const Web3 = require('web3')
const HDWalletProvider = require('@truffle/hdwallet-provider');
const MNEMONIC = 'keen beef way never plunge like slab shove unhappy file same rely'
const ROPSTEN_URL = "https://ropsten.infura.io/v3/49ddda8aa6f44ea9a479729898a4024f"
const GANACHE_URL = 'http://localhost:7545'
const ETHEREUM_NETWORK_SELECTION = process.env.ETHEREUM_NETWORK_SELECTION || "GANACHE"
class  Provider {
  constructor() {
    //setup web3 provider
    try {
      switch (ETHEREUM_NETWORK_SELECTION) {
        case "ROPSTEN":
          console.log("PROVIDER CHOOSEN ", ETHEREUM_NETWORK_SELECTION )
          this.web3 = new Web3(new HDWalletProvider(MNEMONIC,ROPSTEN_URL))
          break;
        case "GANACHE":
          this.web3 = new Web3.providers.HttpProvider(GANACHE_URL)
          break;
        default:
          this.web3 = new Web3.providers.HttpProvider(GANACHE_URL)
          break;
      }
    }catch (error){
      console.log("Middleware-Provider",error)
    }
  }
  async check_eth_connection(){
    Promise.race([
        this.web3.eth.net.isListening(),
        new Promise(function(resolve, reject) {
            setTimeout(function() {
                reject("Time out");
                console.log("TIMeput ")
            }, 10e3);
        })
    ]);
  }
}

module.exports = Provider