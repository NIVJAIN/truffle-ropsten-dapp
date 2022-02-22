const mongoose = require("mongoose");
const blockchain_model = require('../models/blockchain_model')

const CHECK = ((req,res,next)=>{
    res.status(200).json({
      message: "Check Passed v1"
    })
})

const GET_TEXT = async (req,res,next)=>{
    try {
      // res.status(200).json({message: "dsfsdfdsfs"})
      gethash = await blockchain_model.GET_TEXT();
      res.status(200).json(gethash)
    } catch (err) {
      res.status(500).json(err)
    }
}


const SET_TEXT = async (req,res,next)=>{
    try {
      var setMessage = req.body.setmessage
      gethash = await blockchain_model.SET_TEXT(setMessage);
      res.status(200).json(gethash)
    } catch (err) {
      res.status(500).json(err)
    }
}

const GET_TOTAL_SUPPLY = async (req,res,next)=>{
    try {
      // res.status(200).json({message: "dsfsdfdsfs"})
      gethash = await blockchain_model.GET_TOTAL_SUPPLY();
      res.status(200).json(gethash)
    } catch (err) {
      res.status(500).json(err)
    }
}

const TRANSFER_TOKENS = async (req,res,next)=>{
    try {
      var accountNumberToTransfer = req.body.accountnumber
      var numberOfTokensToTransfer = req.body.totaltokens
      gethash = await blockchain_model.TRANSFER_TOKENS(accountNumberToTransfer, numberOfTokensToTransfer);
      res.status(200).json(gethash)
    } catch (err) {
      res.status(500).json(err)
    }
}

const ACCOUNT_TOKEN_BALANCE = async (req,res,next)=>{
    try {
      // res.status(200).json({message: "dsfsdfdsfs"})
      console.log(req.params)
      let accountNumber = req.params.account
      console.log("get tokens account number ", accountNumber)
      gethash = await blockchain_model.ACCOUNT_TOKEN_BALANCE(accountNumber);
      res.status(200).json(gethash)
    } catch (err) {
      res.status(500).json(err)
    }
}


module.exports = {
    CHECK,  
    SET_TEXT,
    GET_TEXT,
    GET_TOTAL_SUPPLY,
    TRANSFER_TOKENS,
    ACCOUNT_TOKEN_BALANCE
}
  