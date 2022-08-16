require("dotenv").config();

const arrayOfContractsNames = [
  { title: "Blocknot", args: [] }
];

async function main() {
  const arrLength = arrayOfContractsNames.length;

  if (arrLength === 0) {
    console.log("Nothing to deploy");
    return;
  }

  console.log(
    `Start deploying of ${arrLength} contract${arrLength > 1 ? "s" : ""}`
  );

  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  for (let i = 0; i < arrayOfContractsNames.length; i++) {
    const title = arrayOfContractsNames[i].title;
    const args = arrayOfContractsNames[i].args;
    console.log(`Deploying contract #${i + 1} with title ${title}`);
    const Contract = await ethers.getContractFactory(title);
    const contract = await Contract.deploy(...args);
    await contract.deployed();
    console.log(`Deploy finished. ${title} address: ${contract.address}`);
    saveABIForClient(contract, title);
  }
}

function saveABIForClient(contract, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../client/contracts";
  const TokenArtifact = artifacts.readArtifactSync(name);

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
    console.log("Crontracts directory created.");
  }
 
  if (!fs.existsSync(`${contractsDir}/provider.js`)) {
    fs.writeFileSync(
      `${contractsDir}/provider.js`,
      `import { ethers } from "ethers";

let provider;
      
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  provider = new ethers.providers.Web3Provider(window.ethereum);
} else {
  provider = new ethers.providers.InfuraProvider("${process.env.NETWORK}");
}

export default provider;
  `
    );
    console.log("Provider created");
  }

  fs.writeFileSync(
    `${contractsDir}/${lowercaseFirstLetter(name)}.js`,
    `import {ethers} from 'ethers';
import provider from './provider';    
   
const address = "${contract.address}";

const abi = ${JSON.stringify(TokenArtifact.abi, null, 2)};

const ${lowercaseFirstLetter(
      name
    )} = new ethers.Contract(address, abi, provider);

export default ${lowercaseFirstLetter(name)};

`
  );
  console.log(`Instance ${lowercaseFirstLetter(name)}.js created.`);
}

function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
