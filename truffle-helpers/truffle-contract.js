
const Provider = require('./truffle-provider')
const provider = new Provider()
const { ADDRESS, ABI } = require('../middlewares/blockchain/metadata')
const CONTRACT_ARTIFACTS = require('../build/contracts/ERC20Coin.json')
var contract = require("@truffle/contract");
var Truffleprovider = new Web3.providers.HttpProvider("http://localhost:7545");


class Contract {
  constructor() {
    this.web3 = provider.web3
    this.abi = ABI
  }
  // create contract instance
initContract() {
    return new Promise((resolve, reject)=>{
        try {

            const MycontractInstance = contract(CONTRACT_ARTIFACTS);
            MycontractInstance.setProvider(Truffleprovider);
            // const instance = await MycontractInstance.deployed();
            MycontractInstance.deployed().then(function(result){
                // return instance
                var instance = result
                resolve(instance)
            }).catch(function(err){
                reject(err)
            })
            // return instance
        } catch(error){
            console.log("Contract..", error)
            reject(error)
        }
    })
  }
}
module.exports = Contract
