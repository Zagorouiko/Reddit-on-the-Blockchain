import Web3 from "web3";
import { Router } from '../routes';

//let means we can re-assign this variable
let web3;
let metamaskStatus;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  metamaskStatus = true;
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  console.log('no Metamask');
  metamaskStatus = false;
  const provider = new Web3.providers.HttpProvider(
    process.env.REACT_APP_WEB3_PROVIDER_RINKEBY
  );
  web3 = new Web3(provider);
}

export { web3, metamaskStatus};
