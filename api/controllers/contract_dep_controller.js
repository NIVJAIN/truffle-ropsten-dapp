const mongoose = require("mongoose");
const blockchain_model = require('../models/deploy-contract-model')

const DEPLOY = async (req,res,next)=>{
    try {
      var tokenName = req.body.tokenname
      var totalToken = req.body.totaltoken
      var tokenDescription = req.body.tokendescription
      gethash = await blockchain_model.DEPLOY();
      res.status(200).json(gethash)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  
  
module.exports = {
    DEPLOY
}
  