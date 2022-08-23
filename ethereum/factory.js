//Will use to import the factory instance to multiple places in the project. saves on duplication
import web3 from './web3';
import PostFactory from './build/PostFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(PostFactory.interface),
  "0xa50fCf36e53628c45b9040CEeD68A15FF1638F33"
);

export default instance;
