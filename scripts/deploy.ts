import { ethers, network, run } from "hardhat";

// main
async function main() {
  const taskContractFactory = await ethers.getContractFactory("TaskContract");
  console.log("Deploying contract...");
  const taskContract = await taskContractFactory.deploy();
  await taskContract.deployed();
  console.log(`Contract deployed at: ${taskContract.address}`);

  // verify logic
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    await taskContract.deployTransaction.wait(6);
    await verify(taskContract.address, []);
  }
}

// verify
async function verify(contractAddress: string, args: any[]) {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.toLowerCase().includes("already verified")
    ) {
      console.log("Contract is already verified");
    } else {
      console.error(error);
    }
  }
}

// main function caller
async function runMain() {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();
