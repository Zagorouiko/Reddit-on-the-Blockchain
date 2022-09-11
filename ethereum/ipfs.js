const IpfsClient = require('ipfs-http-client');

const projectId = process.env.REACT_APP_IPFS_PROJECT_ID;
const projectSecret = process.env.REACT_APP_IPFS_PROJECT_SECRET;

console.log(projectSecret);
const auth =
    'Basic ' + Buffer.from('2DtoYScNxq4dAEa3n7BODosJvwg' + ':' + '388a1b4ebeac45b9e089be4ce34daaf8').toString('base64');

const Client = IpfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

export default Client;
