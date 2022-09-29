const IpfsClient = require('ipfs-http-client');

const projectId = "2DtoYScNxq4dAEa3n7BODosJvwg";
const projectSecret = "388a1b4ebeac45b9e089be4ce34daaf8";

const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const Client = IpfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

export default Client;
