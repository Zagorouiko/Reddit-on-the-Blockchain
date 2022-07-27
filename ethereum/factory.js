//Will use to import the factory instance to multiple places in the project. saves on duplication
import web3 from './web3';
import PostFactory from './build/PostFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(PostFactory.interface),
  "0x83aD8Da83D828c8c834a871E95c1B686ef3c7F26"
);

export default instance;
