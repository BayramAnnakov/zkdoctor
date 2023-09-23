import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();


  console.log("Deploying contracts with the account:", deployer.address);

  const MockToken = await ethers.getContractFactory("MockToken");
  const mockToken = await MockToken.deploy();
  await mockToken.waitForDeployment();

  console.log("MockToken address:", await mockToken.getAddress());

  const zkDoctor = await ethers.getContractFactory("zkDoctor");
  const zkdoctor = await zkDoctor.deploy('0x0000000000000000000000000000000000000000', mockToken.getAddress());
  await zkdoctor.waitForDeployment();
  console.log("zkDoctor address:", await zkdoctor.getAddress());

  const verifier = await ethers.getContractFactory("Verifier");
  const verifierContract = await verifier.deploy();
  await verifierContract.waitForDeployment();
  console.log("Verifier address:", await verifierContract.getAddress());
  




}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
