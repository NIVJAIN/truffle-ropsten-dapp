const Contract = require('../../middlewares/Contract')
const Provider = require('../../middlewares/provider')
const provider = new Provider()

const contract = new Contract()
const web3 = provider.web3
const instance = contract.initContract()
const mongoose = require("mongoose");
const path = require('path')


const DEPLOY = async function() {
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