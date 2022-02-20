var Web3 = require('web3'),
  contract = require("truffle-contract"),
  path = require('path')
  web3 = new Web3(new Web3.providers.HttpProvider(process.env.BLOCKCHAIN_URL ||'http://localhost:7545'));
  var ERC20Coin_artifacts = require(path.join(__dirname, 'build/contracts/ERC20Coin.json'));
  ERC20Coin = contract(ERC20Coin_artifacts);
  ERC20Coin.setProvider(web3.currentProvider);

const queryBlockchain = async (accountNumber) => {
    try {
        const accounts = await web3.eth.getAccounts();
        account = accounts[accountNumber]
        let getInfo = await getTokens(account)
        console.log("GetInfo, AccountNumber", accountNumber, account, getInfo)
    } catch (error) {
        console.log("GetInfo", error)
    }
}


const getTokens = async (account) => {
    return new Promise(async (resolve, reject) => {
        ERC20Coin.deployed().then(async function(instance){
            const accounts = await web3.eth.getAccounts();
            account1 = accounts[0];
            account2 = accounts[1];
            instance.balanceOf(account).then(async function(result){
                getTotalSupply = await instance.totalSupply();
                getTotalSupply2 = parseFloat(result) / Math.pow(1, getTotalSupply); 
                console.log("total", getTotalSupply2)
                var tokenBalance = parseFloat(result) / Math.pow(1, result);
                // var tokenBalance = result
                resolve(tokenBalance)
            })
        }).catch(function(err){
            console.log(err)
            reject(err)
        })
    })
}

(async (x) => {
    try {
        const accounts = await web3.eth.getAccounts();
        account = accounts[x]
        let getInfo = await getTokens(account)
        console.log("GetInfo, AccountNumber", x, account, getInfo)
    } catch (error) {
        console.log("AsyncAnonoymousFunc", error)
    }
})(0)

const transferTokens = async (accountNumber, numberOfTokens) => {
    return new Promise(async (resolve, reject) => {
        ERC20Coin.deployed().then(async function(instance){
            const accounts = await web3.eth.getAccounts();
            transferToAccount = accounts[accountNumber]
            account1 = accounts[0];
            instance.transfer(transferToAccount, numberOfTokens, {gas: 240000, from: account1}).then(function(result){
                console.log("transferTokens()", result)
                resolve(result)
            })
        }).catch(function(err){
            console.log(err)
            reject(err)
        })
    })
}




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


// queryBlockchain(1);
// transferTokens(2, 5);
// queryBlockchain(2);