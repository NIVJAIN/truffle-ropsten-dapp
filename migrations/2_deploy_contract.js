var HelloWorld = artifacts.require("HelloWorld");
// module.exports = function(deployer) {
//     deployer.deploy(HelloWorld, "hello");
//     // Additional contracts can be deployed here
// };

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


module.exports = function(deployer) {
    deployer.deploy(HelloWorld, "hello").then(() =>{
        fs.writeFile(
            // __dirname + fpath,
            fpath,
            'const ADDRESS = ' + "'" + HelloWorld.address + "';",
            (err) => {
              if (err) {
                console.log(err)
              } else {
              }
            },
          )
        
          fs.appendFile(
            // __dirname + path,
            fpath,
            '\nconst ABI = ' + JSON.stringify(HelloWorld.abi) + ';',
            (err) => {
              if (err) {
                console.log(err)
              } else {
                fs.appendFile(
                  // __dirname + path,
                  fpath,
                  '\nmodule.exports = { ADDRESS, ABI };',
                  (err) => {
                    if (err) {
                      console.log(err)
                    }
                  },
                )
              }
            },
          )

    })
    // Additional contracts can be deployed here
};