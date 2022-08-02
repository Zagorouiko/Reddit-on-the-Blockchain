//Will use to import the factory instance to multiple places in the project. saves on duplication
import web3 from './web3';
import PostFactory from './build/PostFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(PostFactory.interface),
  "0xE2113e8f5CeE117DF41859356050e3e5b0B78AC3"
);

export default instance;
