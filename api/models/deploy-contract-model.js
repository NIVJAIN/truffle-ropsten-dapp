const Contract = require('../../middlewares/Contract')
const Provider = require('../../middlewares/provider')
const provider = new Provider()

const contract = new Contract()
const web3 = provider.web3
const instance = contract.initContract()
const mongoose = require("mongoose");
const path = require('path')
let fs = require("fs");
const solc = require('solc')
// const sc = require('../../contracts/ERC20Coin.sol')


// some how compilationdoest work as the web3.eth.compile.solidity is deprecated.
// need to find otherways to compile the .sol files
// right now only way is to compile before running the app.
// 
const COMPILE_SMART_CONTRACT = async function() {
    return new Promise ((resolve, reject)=>{
        console.log("--idirmanem", __dirname)
        // let source = fs.readFileSync(__dirname, + "/ERC20Coin.json");
        // let source = fs.readFileSync("/ERC20Coin.json");
        // var compile = web3.eth.compile.solidity(sc)
        var compiled = solc.compile(sc, 1);
        console.log(compiled)
        // var abi = compiled['<stdin>:demo'].info.abiDefinition;
        console.log("ABI", abi)
        resolve({
            compile : compiled,
            abi : abi
        })
    }) 
}

// COMPILE_SMART_CONTRACT().then(function(result){
//     console.log("ddd",result)
// }).catch(function(err){
//     console.log("eeeeeee",err)
// })


const DEPLOY = async function(tokenName, totalToken, tokenDescription) {
    return new Promise(async(resolve,reject)=>{
      try {
        const ERC20CoinContract = require('../../build/contracts/ERC20Coin.json')
        const MyContract = new web3.eth.Contract(ERC20CoinContract.abi)
        const accounts = await web3.eth.getAccounts();
        console.log("MyContract ====>", MyContract)
        const gas = await MyContract.deploy({
          data: ERC20CoinContract.bytecode
        }).estimateGas()
        console.log("GAS ESTIMATION====>", gas)
        let dep = await MyContract.deploy({data: ERC20CoinContract.bytecode})
        .send({
          from: accounts[0],
          gas: gas,
        })
        .on('error', (error) => {
          console.log(error)
        })
        .on('transactionHash', (transactionHash) => {
          console.log(transactionHash)
        })
        .on('receipt', (receipt) => {
           // receipt will contain deployed contract address
           console.log(receipt)
        })
        .on('confirmation', (confirmationNumber, receipt) => {
          console.log(receipt)
        })
      } catch (error) {
        console.log("DEPLOY ---- ", error)
        reject(error.message);
      }
    })
  }

  module.exports = {
      COMPILE_SMART_CONTRACT,
      DEPLOY,
  }