// var HelloWorld = artifacts.require("HelloWorld");
var HelloWorld = artifacts.require("ERC20Coin");

const fs = require('fs')
var fse = require('fs-extra');
const path = require('path')
const moment = require('moment')

// Backup the old metadata.js file
const fpath = path.join(__dirname, '../middlewares/blockchain/metadata.js');
var filelocation = '../middlewares/blockchain'
if (fs.existsSync(fpath)) {
  fse.copySync(path.resolve(__dirname ,'../middlewares/blockchain/metadata.js'), `${filelocation}/${moment().format("DD-MMM-YYYY-HHmmss")}-metada.js`);
}

// Backup the old build files ERC20Coin.json file, this is for truffle frameworks, need some fine tuning to filenaming may be later
const fileName = "ERC20Coin.json"
const buildFpath = path.join(__dirname, `../build/contracts/${fileName}`);
var filelocation = '../build/contracts'
if (fs.existsSync(buildFpath)) {
  fse.copySync(path.resolve(__dirname ,'../build/contracts/ERC20Coin.json'), `${filelocation}/${moment().format("DD-MMM-YYYY-HHmmss")}-${fileName}`);
}

module.exports = function(deployer) {
    deployer.deploy(HelloWorld).then(() =>{
    var metadataInfo = 
`const ADDRESS = "${HelloWorld.address}";
const ABI = ${JSON.stringify(HelloWorld.abi)};
module.exports = { ADDRESS, ABI };`

      fs.writeFile(fpath, metadataInfo,
        (err) => {
          if (err) {
            console.log(err)
          } else {
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
            // console.log(fs.readFileSync(fpath, "utf8"));
          }
        },
      )
    }).catch(function(err){
      console.log("errewerwrewrwe", err)
    })
    // Additional contracts can be deployed here
};