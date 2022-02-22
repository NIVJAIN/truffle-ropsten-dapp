// "use strict";
/* ====================================================
                    IMPORT SETUP
==================================================== */ 
const APP_NETWORK_NAME = "ropsten"
// const APP_NETWORK_NAME = "ganache"
require('dotenv').config({ path: `.env.${APP_NETWORK_NAME}` })
process.env.APP_NETWORK_NAME = APP_NETWORK_NAME
// require('dotenv').config()
const express = require('express')
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
const Contract = require('./middlewares/Contract')
const Provider = require('./middlewares/provider')
const provider = new Provider()

const contract = new Contract()
const web3 = provider.web3
const instance = contract.initContract()

/* ====================================================
                    PRINT PROCESS.ENV FROM .ENV FILE
======================================================*/ 
console.log("=====================Process.env========================")
console.log(process.env)
console.log("=====================Process.env========================")

/* ====================================================
                    MULTER SETUP
======================================================*/ 
const multer = require('multer');
// const upload = multer();

const f_path = "uploaded"
fs.mkdirSync(f_path, { recursive: true })
const storage = multer.diskStorage({
   
    destination: function(req, file, cb) {
        cb(null, 'uploaded/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        filenameWithOutExtension=  path.parse(file.originalname).name;
        cb(null, filenameWithOutExtension + '-' + Date.now() + path.extname(file.originalname));
    }
});
// app.use(cookieParser())

/* ====================================================
                    CORS SETUP
======================================================*/ 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
});
/* ====================================================
                    ROUTES SETUP
======================================================*/ 
// const blockchain = require('./api/routes/blockchain_routes.js')
// app.use('/blockchain', blockchain.router)
/* ====================================================
                    STATIC SITE SETUP
======================================================*/ 
app.use(express.static(__dirname + "/View"));


/* ====================================================
                    DUMMY ROUTES
======================================================*/ 
app.get('/', (req,res,next)=>{
    res.status(200).json({
        message: "SuccesspulumiJabil"
    })
})

app.get('/healthy', (req,res,next)=>{
    res.status(200).json({
        message: "Iam 200% ok"
    })
})

app.get('/hello', async (req,res,next)=>{
    try {
        getHelloWorldMessage = await getHelloWorld()
        res.status(200).json({
            message: getHelloWorldMessage
        })
    } catch(error){
        res.status(500).json({
            error: error
        })
    }
})




// 
const getHelloWorld = async () => {
    return new Promise(async (resolve, reject) => {
      try {
          const { sayHello } = instance.methods;
          const getHello =  await sayHello().call();
          console.log("BLOCKCHAIN_CALL", getHello)
          resolve({
            result: getHello
          })
      } catch (error){
          console.log("Register:Error", error)
          reject(error)
      }
    })
  }

  const setMessageBlockchain = async (message) => {
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
          reject(error)
      }
    })
  }

  const getMessageBlockchain = async () => {
    return new Promise(async (resolve, reject) => {
      try {
          const { getText } = instance.methods;
          const getMessage =  await getText().call();
          console.log("getTextBlockchain()", getMessage)
          resolve({
            result: getMessage
          })
      } catch (error){
          console.log("Register:Error", error)
          reject(error)
      }
    })
  }

  const getTokens = async (accountNumber) => {
    return new Promise(async (resolve, reject) => {
      try {
          const accounts = await web3.eth.getAccounts();
          account = accounts[accountNumber];
          const { balanceOf } = instance.methods;
          const getTokenBalance =  await balanceOf(account).call();
          console.log("getTokens() accountNumber", accountNumber, getTokenBalance)
          resolve({
            result: getTokenBalance
          })
      } catch (error){
          console.log("Register:Error", error)
          reject(error)
      }
    })
  }


const transferTokens = async (accountNumberToTransfer, numberOfTokensToTransfer) => {
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
        reject(error)
    }
  })
}


const getTotalSupply = async ( ) => {
  return new Promise(async (resolve, reject) => {
    try {
        const { totalSupply } = instance.methods;
        var totSupply =  await totalSupply().call();
        resolve({
          totalSupply: totSupply,
        })
    } catch (error){
        console.log("Register:Error", error)
        reject(error)
    }
  })
}



const transferTokens__ = async (accountNumberToTransfer, numberOfTokensToTransfer) => {
  return new Promise(async(resolve, reject) => {
    const accounts = await web3.eth.getAccounts();
    account = accounts[accountNumberToTransfer];
    account2 = accounts[1];
    const { transfer, balanceOf } = instance.methods;
    instance.transfer(account2, ).then(function (result) {
      if (result) {
        console.log("token transfered")
        balanceOf(localAddress).then(function (amount) {
          console.log("GetAmount", amount)
          resolve(amount)
        });
      }
    }).catch(function (err) {
      // There was an error! Handle it.
      console.log("TransactionError: ", err);
      reject(err)
    });
  })
}


  
  const queryRequests = async () => {
      try {
        // await getMessageBlockchain();
      //  let a = await transferTokens(1, 5);
       let y = await getTokens(1);
       let x = await getTotalSupply();
       let z = await getTokens(0);
      //  console.log("x", x, z)
        // await setMessageBlockchain("Hello Blockchain");
        // await getMessageBlockchain();
        // await getHelloWorld();
      } catch (error){
          console.log("Register:Error", error)
      }
  }


  // const results = async () => {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       let getMessage = await queryRequests();
  //         resolve({
  //           result: getMessage
  //         })
  //     } catch (error){
  //         console.log("Register:Error", error)
  //         reject(error)
  //     }
  //   })
  // }
  queryRequests();

// const cron = require('./services/jobSchedular')
server.listen(PORT, function(){
    console.log(`magik happens on this port => https://localhost:${PORT}`)
});