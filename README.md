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

# Deploying to local ganache
```
1. git clone 
2. cd <repo> && npm install --save
3. truffle compile
4. truffle migrate --network dev 0r truffle migrate --network dev --reset
4. npx 
```


# Deploying to local ROPSTEN NETWORK
```
0. IMP to note make sure account 0 is funded with test ether.
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
λ  truffle-ropsten-dapp npx truffle console --network ropsten
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
'0'
================================================================
```

# ROPSTEN NETWORK
```
https://ropsten.etherscan.io/address/0x237a3B44F00265993216FdD6d3DDf5e29B085C2A
https://ropsten.etherscan.io/address/0xC837100d9809322Bc8b1D4167a8f000F1F0c9c96

```

# Get test ethers from below link
https://faucet.ropsten.be/ didnt work for me
https://faucet.egorfine.com/  works but only recieving 0.2 ethers.

