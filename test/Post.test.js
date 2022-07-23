const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledPost = require('../ethereum/build/Post.json');

let accounts;
let post

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  post = await new web3.eth.Contract(JSON.parse(compiledPost.interface))
  .deploy({ data: compiledPost.bytecode, arguments: ['First Post', 'content'] })
  .send ({ from: accounts[0], gas: '3000000' });
  });

describe('Post contract', () => {
  it('deploys a post', () => {
    assert.ok(post.options.address);
  });

  it('Verifies title', async () => {
    const title = await post.methods.title().call();
    console.log(title);
    assert.ok(title)
  });

  it('Verifies content', async () => {
    const content = await post.methods.content().call();
    console.log(content);
    assert.ok(content)
  });

  it('upvotes a post', async () => {
    await post.methods.upVote().send({ from: accounts[0], value: 100 });
    const upVoteCount = await post.methods.upVoteCount().call();
    console.log(upVoteCount);
    assert.equal(1, upVoteCount);
  })
})
