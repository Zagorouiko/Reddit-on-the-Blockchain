//Will use to import the factory instance to multiple places in the project. saves on duplication
import web3 from './web3';
import PostFactory from './build/PostFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(PostFactory.interface),
  "0x049d3F9A41745dDBc67Bd1d615B89de2265712c9"
);

export default instance;
