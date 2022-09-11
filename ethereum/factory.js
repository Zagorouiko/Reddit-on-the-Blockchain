//Will use to import the factory instance to multiple places in the project. saves on duplication
import { web3, metamaskStatus } from './web3';
import PostFactory from './build/PostFactory.json';
import { Router } from '../routes';

const instance = new web3.eth.Contract(
  JSON.parse(PostFactory.interface),
  "0x1873200d0F1A47951f6Bc6E34B4D8EE3e3cA62ad"
);

export default instance;
