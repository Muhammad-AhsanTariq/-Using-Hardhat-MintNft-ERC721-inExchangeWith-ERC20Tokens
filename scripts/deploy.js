async function main() {
    // We get the contract to deploy
    const ERC20 = await ethers.getContractFactory("iecToken");
    console.log("Deploying Contract 1 . . . . ");
    const erc20 = await ERC20.deploy();
    await erc20.deployed();

    console.log("Contract deployed to:", erc20.address);

    const ERC721 = await ethers.getContractFactory('myNFT');
    console.log("Deploying Contract 2 . . . . ");
    const erc721 = await ERC721.deploy(erc20.address);
    await erc721.deployed();

    console.log("Contract deployed to:", erc721.address);

  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  