// "use strict";
/* ====================================================
                    IMPORT SETUP
==================================================== */ 
require('dotenv').config()
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
const Contract = require('./middlewares/blockchain/Contract')
const Provider = require('./middlewares/blockchain/provider')
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
  getMessageBlockchain();
//   setMessageBlockchain("Hello Blockchain");
//   getMessageBlockchain();
  getHelloWorld();

// const cron = require('./services/jobSchedular')
server.listen(PORT, function(){
    console.log(`magik happens on this port => https://localhost:${PORT}`)
});