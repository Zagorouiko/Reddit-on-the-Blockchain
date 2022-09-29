//Will use to import the factory instance to multiple places in the project. saves on duplication
import { web3, metamaskStatus } from './web3';
import PostFactory from './build/PostFactory.json';
import { Router } from '../routes';

const instance = new web3.eth.Contract(
  JSON.parse(PostFactory.interface),
  "0x49E52B19809212a578AC26A0000823E49F99334e"
);

export default instance;
