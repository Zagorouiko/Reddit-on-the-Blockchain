//Will use to import the factory instance to multiple places in the project. saves on duplication
import web3 from './web3';
import PostFactory from './build/PostFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(PostFactory.interface),
  "0x5021afd2c80a4D9A074acb6B697C3Fdc2beaE30A"
);

export default instance;
