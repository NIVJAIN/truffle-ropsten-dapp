// import {Router} from 'express';
var express = require('express');
let router = express.Router()
const contract_dep_controller = require('../controllers/deploy_contract_controller');

router.post("/deploy", contract_dep_controller.DEPLOY)
module.exports = {router};
