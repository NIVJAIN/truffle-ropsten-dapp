const Web3 = require('web3')
const HDWalletProvider = require('@truffle/hdwallet-provider');
const MNEMONIC = 'keen beef way never plunge like slab shove unhappy file same rely'
// const ROPSTEN_URL = "https://ropsten.infura.io/v3/49ddda8aa6f44ea9a479729898a4024f"
const ROPSTEN_URL = "https://ropsten.infura.io/v3/91b9eba794e24656aff698122444d6d5"

class  Provider {
  constructor() {
    //setup web3 provider
    try {


      
      this.web3 = new Web3(
        // new Web3.providers.HttpProvider('http://localhost:7545'),
        // new Web3.providers.HttpProvider(process.env.BLOCKCHAIN_URL)
        new HDWalletProvider(MNEMONIC,ROPSTEN_URL)
        // new HDWalletProvider(process.env.MNEMONIC,process.env.BLOCKCHAIN_URL)
      )
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