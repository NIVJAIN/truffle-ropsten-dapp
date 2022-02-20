### Software Versions
```
1. Truffle v5.4.33
2. Solidity - ^0.8.12 (solc-js)
3. Node v14.19.0
4. Web3.js v1.5.3
5. Mac M1 Max Pro (macOS Monterey)
6. MongoDB 4.0
```


# PRE-REQUISITE
```
1. nodejs & npm
2. truffle installation
3. gance-cli 
```


# Installation Steps
```
1. brew install nodejs [node -v & npm -v]
2. npm install -g truffle
3. npm install -g ganache-cli
```

# Ganache Deployment (Local Ganche)
```
1. git clone 
2. cd <repo> && npm install --save
3. truffle compile
4. truffle migrate --network dev 0r truffle migrate --network dev --reset
4. npx 
```


# Ropsten Deployment (Public Testnet)
```
0. IMP to note make sure account 0 is funded with test ether & in .env change the BLOCKCHAIN_URL to ROPSTEN
1. git clone 
2. cd <repo> && npm install --save
3. truffle compile
4. npx truffle console --network ropsten
5. truffle(ropsten)> web3.eth.getBalance(accounts[0]) 
6. make sure ethers are funded to the above account[0]
7. truffle(ropsten)> web3.eth.getBalance(accounts[0]) '200000000000000000'
4. truffle migrate --network ropsten
```


<!-- npx mnemonics
npx truffle console --network ropsten
accounts
web3.eth.getBalance(accounts[0]) -->


# ROPSTEN NETWORK
```
================================================================
MAC ROPSTEN Setup (Account 1 & 2 imported to Metamask)
================================================================
λ  truffle-ropsten-dapp git:(main) truffle console --network ropsten
truffle(ropsten)> accounts
[
  '0x237a3B44F00265993216FdD6d3DDf5e29B085C2A',
  '0xC837100d9809322Bc8b1D4167a8f000F1F0c9c96',
  '0x7c2C8ca1cf274bFCaB73873cB53f17FD625366c4',
  '0x63Fa89B5fb72CAb5BfEFff39c6c870607d38D035',
  '0x7e46A6d24305Af3959f890C807D3bdE3EB7BC1c3',
  '0x8FA506f6636c69101344Bb2Bd66FA1CF301D9E86',
  '0x749BBa72e1dfCE20cB9a5CF2eBafb456D3174453',
  '0x3d665A37F03d115Ab5973B0eE2b1508a64A1a7EB',
  '0xD6CCF377d5c6ac65eD62DFE6C46Ab223B5b934f1',
  '0xE054A6e8578cC9648FBd763FBB31D7B6B378FeE5'
]
truffle(ropsten)> web3.eth.getBalance(accounts[0])
'198850192004071963'
truffle(ropsten)> web3.eth.getBalance(accounts[1])
'1200000000000000000'
truffle(ropsten)> 
================================================================
```

# ROPSTEN NETWORK to check details on | transaction | tokens | contract 
```
https://ropsten.etherscan.io/address/0x237a3B44F00265993216FdD6d3DDf5e29B085C2A
https://ropsten.etherscan.io/address/0xC837100d9809322Bc8b1D4167a8f000F1F0c9c96

```

# Smart Contract interaction
```
ganache-cli --p 7545
cd <repo>
node server.js
http:\\localhost:9000\hello

Output as shown below
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
Content-Type: application/json; charset=utf-8
Content-Length: 36
ETag: W/"24-yBabfZF1nE2M7uuXaWiPp1tiARA"
Date: Fri, 18 Feb 2022 09:27:56 GMT
Connection: close

{
  "message": {
    "result": "hello world"
  }
}

```


# Get test ethers from below link
https://faucet.ropsten.be/ didnt work for me
https://faucet.egorfine.com/  works but only recieving 0.2 ethers.

