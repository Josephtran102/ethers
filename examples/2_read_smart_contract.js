const { ethers } = require("ethers");
require('dotenv').config(); // Đọc các biến môi trường từ file .env

const API_KEY = process.env.ALCHEMY_API_KEY
const provider = new ethers.providers.JsonRpcProvider(`https://eth-goerli.g.alchemy.com/v2/${API_KEY}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
];

const address = '0x07865c6E87B9F70255377e024ace6630C1Eaa37F' // token Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const name = await contract.name()
    const symbol = await contract.symbol()
    const totalSupply = await contract.totalSupply()

    console.log(`\nReading from ${address}\n`)
    console.log(`Name: ${name}`)
    console.log(`Symbol: ${symbol}`)
    console.log(`Total Supply: ${totalSupply}\n`)

    const balance = await contract.balanceOf('Address....')

    console.log(`Balance Returned: ${balance}`)
    console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`)
}

main()