const Web3 = require('web3')
Web3Connect: async () => {
    try {
        const provider = await App.Provider()
        if (provider) {
            App.web3 = new Web3(provider)
        } else {
            App.web3 = new Web3(new Web3.providers.HttpProvider(process.env.BLOCKCHAIN_URL))
        }
    } catch (error) {
        alert("Enable to access to Metamask")
        console.log(error)
    }
}
Provider: async () => {
    const {
        ethereum
    } = window
    if (ethereum) {
        try {
            await ethereum.enable()
            return ethereum
        } catch (error) {
           //throw
        }
    }
    //legacy provider
    const {
        web3
    } = window
    if (web3 && web3.currentProvider) {
        return web3.currentProvider
    }

    return null
}