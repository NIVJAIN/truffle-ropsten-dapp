# ROPSTEN DEPLOYMENT OUTPUT

``` 

λ  truffle-ropsten-dapp truffle migrate --network ropsten

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.

WARNING: Ganache forking only supports EIP-1193-compliant providers. Legacy support for send is currently enabled, but will be removed in a future version _without_ a breaking change. To remove this warning, switch to an EIP-1193 provider. This error is probably caused by an old version of Web3's HttpProvider (or ganache < v7)


Migrations dry-run (simulation)
===============================
> Network name:    'ropsten-fork'
> Network id:      3
> Block gas limit: 8000000 (0x7a1200)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
undefined
   > block number:        11983388
   > block timestamp:     1645175104
   > account:             0x237a3B44F00265993216FdD6d3DDf5e29B085C2A
   > balance:             0.19937464491995456
   > gas used:            250142 (0x3d11e)
   > gas price:           2.50000032 gwei
   > value sent:          0 ETH
   > total cost:          0.00062535508004544 ETH

   -------------------------------------
   > Total cost:     0.00062535508004544 ETH


2_deploy_contract.js
====================

   Deploying 'HelloWorld'
   ----------------------
undefined
   > block number:        11983390
   > block timestamp:     1645175107
   > account:             0x237a3B44F00265993216FdD6d3DDf5e29B085C2A
   > balance:             0.198922224873332486
   > gas used:            135055 (0x20f8f)
   > gas price:           2.500000249 gwei
   > value sent:          0 ETH
   > total cost:          0.000337637533628695 ETH

   -------------------------------------
   > Total cost:     0.000337637533628695 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.000962992613674135 ETH




Starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 8000000 (0x7a1200)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   ⠋ Blocks: 0            Seconds: 0   > transaction hash:    0xa768aa20e478fbdd53f0f36f4525978bcbd3b2510c37104dd4d945a4b53b9f92
   ⠹ Blocks: 0            Seconds: 0undefined
   ⠴ Blocks: 0            Seconds: 5undefined
   ⠴ Blocks: 1            Seconds: 9undefined
   ⠙ Blocks: 1            Seconds: 13undefined
   ⠋ Blocks: 1            Seconds: 17undefined
   ⠋ Blocks: 1            Seconds: 21undefined
   ⠏ Blocks: 1            Seconds: 25undefined
   > Blocks: 1            Seconds: 29
   > contract address:    0x7b5b18523bC0ca82bDA34C42349fec2Df2969860
   > block number:        11983395
   > block timestamp:     1645175125
   > account:             0x237a3B44F00265993216FdD6d3DDf5e29B085C2A
   > balance:             0.199374644771870496
   > gas used:            250142 (0x3d11e)
   > gas price:           2.500000912 gwei
   > value sent:          0 ETH
   > total cost:          0.000625355228129504 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000625355228129504 ETH


2_deploy_contract.js
====================

   Deploying 'HelloWorld'
   ----------------------
   ⠋ Blocks: 0            Seconds: 0   > transaction hash:    0x9317f74c799e1f6f2ab0a446cc5b2d207fda4e2be6c6750a07fe53be27c7387f
   ⠏ Blocks: 0            Seconds: 0undefined
   ⠧ Blocks: 0            Seconds: 6undefined
   ⠦ Blocks: 0            Seconds: 9undefined
   ⠴ Blocks: 0            Seconds: 13undefined
   ⠴ Blocks: 0            Seconds: 17undefined
   > Blocks: 1            Seconds: 21
   > contract address:    0xfe1954537AEd35202d9E097443bDa8bc12984e37
   > block number:        11983398
   > block timestamp:     1645175179
   > account:             0x237a3B44F00265993216FdD6d3DDf5e29B085C2A
   > balance:             0.198922224549913446
   > gas used:            135055 (0x20f8f)
   > gas price:           2.500001295 gwei
   > value sent:          0 ETH
   > total cost:          0.000337637674896225 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000337637674896225 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.000962992903025729 ETH


λ  truffle-ropsten-dapp 

```