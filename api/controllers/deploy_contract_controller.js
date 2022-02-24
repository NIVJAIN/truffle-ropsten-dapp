const mongoose = require("mongoose");
const blockchain_model = require('../models/deploy-contract-model')

const DEPLOY = async (req,res,next)=>{
    try {
      var tokenName = req.body.tokenname
      var totalTokens = req.body.totaltokens
      var tokenDescription = req.body.tokendescription
      gethash = await blockchain_model.DEPLOY(tokenName, totalToken, tokenDescription);
      res.status(200).json(gethash)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  
  
module.exports = {
    DEPLOY
}
  