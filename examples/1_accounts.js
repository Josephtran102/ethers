const { ethers } = require("ethers");
require('dotenv').config(); // Đọc các biến môi trường từ file .env

const API_KEY = process.env.ALCHEMY_API_KEY
const provider = new ethers.providers.JsonRpcProvider(`https://eth-goerli.g.alchemy.com/v2/${API_KEY}`)

const address = process.env.FROM_ADDRESS

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

