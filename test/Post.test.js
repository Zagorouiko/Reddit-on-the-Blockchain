const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/PostFactory.json');
const compiledPost = require('../ethereum/build/Post.json');

let accounts;
let factory
let post

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

    //Uses factory to create a campaign
    await factory.methods.createPost('Title', 'Content').send({
      from: accounts[0],
      gas: '1000000'
    });

//Fancy way to say take the returned collection and assign the value to the first index of the variable
//Since we're calling an already deployed contract, we specify an address
  [postAddress] = await factory.methods.getDeployedPost().call();
  post = await new web3.eth.Contract(
  JSON.parse(compiledPost.interface),
  postAddress
  );
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
    await post.methods.upVote().send({ from: accounts[0], value: web3.utils.toWei('1', 'ether') });
    const upVoteCount = await post.methods.upVoteCount().call();
    console.log(upVoteCount);
    assert.equal(1, upVoteCount);
  })

  it ('upvote sends ether to poster', async () => {
    const balance = await web3.eth.getBalance(accounts[0])
    await post.methods.upVote().send({ from: accounts[1], value: web3.utils.toWei('1', 'ether') });
    const finalBalance = await web3.eth.getBalance(accounts[0]);
    assert(balance > finalBalance);
  })
})
