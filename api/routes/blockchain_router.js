// import {Router} from 'express';
var express = require('express');
let router = express.Router()
const blockchain_controller = require('../controllers/blockchain_controller');

router.get("/check", blockchain_controller.CHECK)
router.get("/getmessage", blockchain_controller.GET_TEXT)
router.post("/setmessage", blockchain_controller.SET_TEXT)

router.get("/totalsupply", blockchain_controller.GET_TOTAL_SUPPLY)
router.post("/transfertokens", blockchain_controller.TRANSFER_TOKENS)
router.get('/gettokens/:account', blockchain_controller.ACCOUNT_TOKEN_BALANCE)
router.post("/transferfrom", blockchain_controller.TOKENS_TRANSFER_FROM);
router.post("/deploy", blockchain_controller.DEPLOY)
module.exports = {router};
