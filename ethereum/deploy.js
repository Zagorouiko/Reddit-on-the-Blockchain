const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/PostFactory.json');

const provider = new HDWalletProvider(
  'rabbit west enjoy female armed seat early desert unknown shoulder hollow city',
  'https://rinkeby.infura.io/v3/d19f7b7225b34872a6c3b69902c2b0f3'
);
const web3 = new Web3(provider);

const deploy = async () => {

  try {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode, arguments: ['First Post', 'content'] })
    .send({ gas: '7000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
} catch(err) {
  console.log(err);
}
};
deploy();
