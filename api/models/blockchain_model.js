const Contract = require('../../middlewares/Contract')
const Provider = require('../../middlewares/provider')
const provider = new Provider()

const contract = new Contract()
const web3 = provider.web3
const instance = contract.initContract()
const mongoose = require("mongoose");
const path = require('path')
// require('mongoose-long')(mongoose);
// const db = require('../../database/mongodb')
// var Long = mongoose.Schema.Types.Long;

// const blcockahinSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     email :{type:String, required:true},
//     name :{type:String, required:true},
//     contractaddress :{type:String, required:true},
//     // abi : {type:Array, "default":[]},
//     regtxn: {type:Object, required:false},
//     date: {type:Date, default: Date.now ,required:false},
//     // tags: {type:Array, "default":[]},
// },{ collection: COLLETION_NAME })
// var TxnSchema = new mongoose.model('BucketSchema', blcockahinSchema)

const GET_TEXT = async () => {
    return new Promise(async (resolve, reject) => {
        try {
          const { getText } = instance.methods;
          const get_Text =  await getText().call();
          console.log("getTextBlockchain()", get_Text)
          resolve({
            result: get_Text
          })
        } catch (error){
          console.log("Register:Error", error)
          reject(error.message)
        }
    })
}



const SET_TEXT = async (message) => {
    return new Promise(async (resolve, reject) => {
      try {
        const accounts = await web3.eth.getAccounts();
        account = accounts[0];
          const { setText } = instance.methods;
          const setMessage = await setText(message).send({gas: 140000, from: account})
          console.log("setText()", setMessage)
          resolve({
            result: setMessage
          })
      } catch (error){
          console.log("Register:Error", error)
          reject(error.message)
      }
    })
  }

  const GET_TOTAL_SUPPLY= async () => {
    return new Promise(async (resolve, reject) => {
        try {
          const { totalSupply } = instance.methods;
          const getTotalSupply =  await totalSupply().call();
          console.log("getTextBlockchain()", getTotalSupply)
          resolve({
            result: getTotalSupply
          })
        } catch (error){
          console.log("GET_TOTAL_SUPPLY():Error", error)
          reject(error.message)
        }
    })
}

const TRANSFER_TOKENS = async (accountNumberToTransfer, numberOfTokensToTransfer) => {
    return new Promise(async (resolve, reject) => {
      try {
          const accounts = await web3.eth.getAccounts();
          _accountNumberToTransfer = accounts[accountNumberToTransfer];
          account1 = accounts[1];
          const { transferFrom, transfer } = instance.methods;
          // const getMessage =  await transfer(account2, 5, {from: account});
          const getMessage =  await transfer(_accountNumberToTransfer, numberOfTokensToTransfer).send({gas: 270000, from: accounts[0]});
          console.log("getTextBlockchain()", getMessage)
          resolve({
            result: getMessage
          })
      } catch (error){
          console.log("Register:Error", error)
          reject(error.message)
      }
    })
  }

const ACCOUNT_TOKEN_BALANCE= async (accountNumber) => {
    return new Promise(async (resolve, reject) => {
        try {
          const accounts = await web3.eth.getAccounts();
          let account = accounts[accountNumber]
          const { balanceOf } = instance.methods;
          const getTokenBalance =  await balanceOf(account).call();
          console.log("getTextBlockchain()", getTokenBalance)
          resolve({
            result: getTokenBalance
          })
        } catch (error){
          console.log("GET_TOTAL_SUPPLY():Error", error)
          reject(error.message)
        }
    })
} 


const TOKENS_TRANSFER_FROM = async (accountNumberFrom, accountNumberTo, totaltokens) => {
    return new Promise(async (resolve, reject) => {
        try {
          const accounts = await web3.eth.getAccounts();
          accountFrom = accounts[accountNumberFrom];
          accountTo = accounts[accountNumberTo];
          const { transferFrom, approve } = instance.methods;
          const approveTrasnfer = await approve(accountFrom, totaltokens).send({gas: 270000, from: accountFrom});
          // console.log("TOKEN_TRANSFER_FROM ========> ", accountFrom, accountTo, accountNumberFrom, accountNumberTo)
          const transferTokens =  await transferFrom(accountFrom, accountTo, totaltokens).send({gas: 270000, from: accountFrom});
          // console.log("TOKENS_TRANSFER_FROM()", transferTokens)
          resolve({
            result: transferTokens
          })
        } catch (error){
          if(error.message){
            console.log("if err.message TOKENS_TRANSFER_FROM():Error", error.message)
            reject(error.message)
          } else {
            console.log("TOKENS_TRANSFER_FROM():Error", error.message)
            reject(error)
          }
          
        }
    })
} 


const GET_COUNT = async () => {
  return new Promise(async (resolve, reject) => {
    try {
        const { getCount } = instance.methods;
        const getMessage =  await getCount().call();
        console.log("getTextBlockchain()", getMessage)
        resolve({
          result: getMessage
        })
    } catch (error){
        console.log("Register:Error", error)
        reject(error.message)
    }
  })
}
  
const INCREMENT = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accounts = await web3.eth.getAccounts();
      account = accounts[0];
        const { increment } = instance.methods;
        const setMessage = await increment().send({gas: 140000, from: account})
        // console.log("increment()", setMessage)
        resolve({
          result: setMessage
        })
    } catch (error){
        console.log("Register:Error", error)
        reject(error.message)
    }
  })
}
const DECREMENT = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accounts = await web3.eth.getAccounts();
      account = accounts[0];
        const { decrement } = instance.methods;
        const setMessage = await decrement().send({gas: 140000, from: account})
        // console.log("increment()", setMessage)
        resolve({
          result: setMessage
        })
    } catch (error){
        console.log("Register:Error", error)
        reject(error.message)
    }
  })
}



module.exports = {
    GET_TEXT,
    SET_TEXT,
    GET_TOTAL_SUPPLY,
    TRANSFER_TOKENS,
    ACCOUNT_TOKEN_BALANCE,
    TOKENS_TRANSFER_FROM,
    // DEPLOY,
    INCREMENT,
    DECREMENT,
    GET_COUNT,
}