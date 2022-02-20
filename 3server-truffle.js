// "use strict";
/* ====================================================
                    IMPORT SETUP
==================================================== */ 
require('dotenv').config()
const express = require('express')
Web3 = require('web3')
const fs = require('fs')
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 9999
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
mongoose.Promise = global.Promise;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
var server = require('http').createServer(app);
const moment = require('moment')
// const cookieParser = require('cookie-parser')
console.log("Moment", moment().format("DD-MM-YYYY-HHmmss"), moment().unix(), Date.now().toString())
/* ====================================================
                    BLOCKCHAIN SETUP
======================================================*/ 
const Contract = require('./truffle-helpers/truffle-contract')
const Provider = require('./truffle-helpers/truffle-provider')
const provider = new Provider()
const web3 = provider.web3
const contract = new Contract()
const instance = contract.initContract()

console.log("First")
/* ====================================================
                    BLOCKCHAIN SETUP
======================================================*/
// console.log(instance) 
// console.log("Second")
// (async()=>{
//     try {
//       // console.log("Third")
//       const instance = await contract.initContract()
//       // console.log("fourth")
//       const accounts = await web3.eth.getAccounts();
//       account = accounts[0];
//         // const instance = await ERC20Coin.deployed();
//         // const instance = await MyContract.deployed();
//         // const result = await instance.sayHello();  
//         const result = await instance.balanceOf(account);  

//         // console.log(result)
//     } catch (error) {
//         // console.log(error)
//     }
// })()


const jain = async function(){
  try {
    // console.log("Third")
    // const instance = await contract.initContract()
    // console.log("fourth")
    const accounts = await web3.eth.getAccounts();
    account = accounts[0];
      // const instance = await ERC20Coin.deployed();
      // const instance = await MyContract.deployed();
      // const result = await instance.sayHello();  
      const result = await instance.balanceOf(account);  

      console.log(result)
  } catch (error) {
      console.log(error)
  }
}

jain()



// var web3provider = new Web3.providers.HttpProvider(process.env.BLOCKCHAIN_URL);
// var contract = require("@truffle/contract");
// const { ADDRESS, ABI } = require('./middlewares/blockchain/metadata')

// // const ABI2 = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xdd62ed3e"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x70a08231"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x313ce567"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa457c2d7"},{"inputs":[],"name":"fooStore","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x261f9617"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x39509351"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x06fdde03"},{"inputs":[],"name":"setMessage","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe90847f4"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x95d89b41"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x18160ddd"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"inputs":[],"name":"sayHello","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function","constant":true,"signature":"0xef5fb05b"},{"inputs":[{"internalType":"string","name":"_setText","type":"string"}],"name":"setText","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5d3a1f9d"},{"inputs":[],"name":"getText","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe00fe2eb"},{"inputs":[{"internalType":"bytes32","name":"foo","type":"bytes32"}],"name":"sendFoo","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x642d8277"},{"inputs":[],"name":"getFoo","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x243dc8da"}];

// var MyContract = contract({
//   abi: ABI,
//   address: ADDRESS, // optional
//   // many more
// })
// // console.log('ddsfds', MyContract)
// MyContract.setProvider(provider);

// var ERC20Coin_artifacts = require(path.join(__dirname, 'build/contracts/ERC20Coin.json'));
// ERC20Coin = contract(ERC20Coin_artifacts);
// // ERC20Coin.setProvider(web3.currentProvider);
// ERC20Coin.setProvider(web3provider);
// // console.log("second")
// // MyContract.deployed().then(function(instance) {
// //     deployed = instance;
// //     return instance.sayHello(),call();
// //   }).then(function(result) {
// //     // Do something with the result or continue with more transactions.
// //     console.log(result)
// //   }).catch(function(err){
// //       console.log("EREEEEEEE", err)
// //   })

// (async()=>{
//     try {
//       const accounts = await web3.eth.getAccounts();
//       account = accounts[0];
//         const instance = await ERC20Coin.deployed();
//         // const instance = await MyContract.deployed();
//         // const result = await instance.sayHello();  
//         const result = await instance.balanceOf(account);  

//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// })()

// const setMessageBlockchain = async (message) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const accounts = await web3.eth.getAccounts();
//       account = accounts[0];
//         const { setText } = instance.methods;
//         const setMessage = await setText(message).send({gas: 140000, from: account})
//         console.log("setText()", setMessage)
//         resolve({
//           result: setMessage
//         })
//     } catch (error){
//         console.log("Register:Error", error)
//         reject(error)
//     }
//   })
// }

// const getMessageBlockchain = async () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//         const { getText } = instance.methods;
//         const getMessage =  await getText().call();
//         console.log("getTextBlockchain()", getMessage)
//         resolve({
//           result: getMessage
//         })
//     } catch (error){
//         console.log("Register:Error", error)
//         reject(error)
//     }
//   })
// }