
const Provider = require('./provider')
const provider = new Provider()
const { ADDRESS, ABI } = require('./blockchain/metadata')
var contract = require("@truffle/contract");
var Truffleprovider = new Web3.providers.HttpProvider("http://localhost:7545");


class Contract {
  constructor() {
    this.web3 = provider.web3
    this.abi = ABI
  }
  // create contract instance
  async initContract() {
    try {
        const MycontractInstance = contract({
            abi: ABI,
            address: ADDRESS
        })
        MycontractInstance.setProvider(Truffleprovider);
        const instance = await MycontractInstance.deployed();
        return instance
    } catch(error){
        console.log("Contract..", error)
    }
  }
}
module.exports = Contract
