
const Provider = require('./provider')
const provider = new Provider()
const { ADDRESS, ABI } = require('./blockchain/metadata')


class Contract {
  constructor() {
    this.web3 = provider.web3
    this.abi = ABI
  }
  // create contract instance
  initContract() {
    try {
      const instance = new this.web3.eth.Contract(ABI, ADDRESS)
      return instance
    } catch(error){
      console.log("Conract..", error)
    }
  }
}

module.exports = Contract
