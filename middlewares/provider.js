const Web3 = require('web3')

class  Provider {
  constructor() {
    //setup web3 provider
    try {
      this.web3 = new Web3(
        // new Web3.providers.HttpProvider('http://localhost:7545'),
        new Web3.providers.HttpProvider(process.env.BLOCKCHAIN_URL)
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