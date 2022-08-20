const { ethers } = require("hardhat");

async function main() {
  // Load the NFT contract artifacts
  const CeloNFTFactory = await ethers.getContractFactory("CeloNFT");

  // Deploy the contract
  const celoNftContract = await CeloNFTFactory.deploy();
  await celoNftContract.deployed();

  // Print the address of the NFT contract
  console.log("Celo NFT deployed to:", celoNftContract.address);
  // 0x432A08F17306b0dDea5B99ddbDc4F7585363A9eE

  // Load the marketplace contract artifacts
  const NFTMarketplaceFactory = await ethers.getContractFactory(
    "NFTMarketplace"
  );

  // Deploy the contract
  const nftMarketplaceContract = await NFTMarketplaceFactory.deploy();

  // Wait for deployment to finish
  await nftMarketplaceContract.deployed();

  // Log the address of the new contract
  console.log("NFT Marketplace deployed to:", nftMarketplaceContract.address);
  // 0x681b5Ef1f9d0e0864C913C1D9147155E07212906

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
