
const Provider = require('./provider')
const provider = new Provider()
const { ADDRESS, ABI } = require(`./blockchain/${process.env.APP_NETWORK_NAME}/metadata`)

class Contract {
  constructor() {
    this.web3 = provider.web3
    this.abi = ABI
  }
  // create contract instance
  initContract() {
    try {
      console.log(this.web3)
      const instance = new this.web3.eth.Contract(ABI, ADDRESS)
      return instance
    } catch(error){
      console.log("Conract..", error)
    }
  }
}

module.exports = Contract
