// scripts/deploy.js
const hre = require("hardhat");

async function main() {
//   // We get the contract to deploy
//   const Factory = await hre.ethers.getContractFactory("Factory");
//  const factory = await Factory.deploy();

// //   await factory.deployed();
//   console.log("Factory deployed to:", factory.address);

//   const Pair = await hre.ethers.getContractFactory("Pair");
//   // We don't deploy Pair directly as it's used within Factory

  const WETH = "0x73511669fd4de447fed18bb79bafeac93ab7f31f"; // Replace with actual WETH address or deploy a WETH contract
  const factory = "0x5095d3313c76e8d29163e40a0223a5816a8037d8"
  const Router = await hre.ethers.getContractFactory("Router");
  const router = await Router.deploy(factory, WETH);

//   await router.deployed();
  console.log("Router deployed to:", router.address);
}


const routerAddres = "0x391342f5acacaac9de1dc4ec3e03f2678f7c78f1"


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run scripts/router.js --network local
