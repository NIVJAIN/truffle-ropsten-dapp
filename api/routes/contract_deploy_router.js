// import {Router} from 'express';
var express = require('express');
let router = express.Router()
const contract_dep_controller = require('../controllers/contract_dep_controller');

router.post("/deploy", contract_dep_controller.DEPLOY)
module.exports = {router};
