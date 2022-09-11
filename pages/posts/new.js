import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message, TextArea } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import post from '../../ethereum/post';
import { web3, metamaskStatus } from '../../ethereum/web3';
import { Router } from '../../routes';
import ipfs from '../../ethereum/ipfs';


class PostNew extends Component {
  state = {
  title: '',
  content: '',
  errorMessage: '',
  loading: false,
  result: '',
  transactionHash:'',
  buffer:''
};

captureFile = (event) => {
        console.log('captured');
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        console.log(file);
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)
      };

      convertToBuffer = async(reader) => {
        console.log('buffering');
       const buffer = await Buffer.from(reader.result);
       this.setState({buffer: buffer});
     };

onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    try {
      const accounts = await web3.eth.getAccounts();
      console.log('Sending from Metamask account: ' + accounts[0]);

      if (this.state.buffer !== '') {
        const result = await ipfs.add(this.state.buffer);
        this.setState({ ipfsHash: result.path });
      } else {
        this.setState({ ipfsHash: '' });
      }

      await factory.methods
      .createPost(this.state.title, this.state.content, this.state.ipfsHash)
      .send({ from: accounts[0] });

      Router.pushRoute('/');
      } catch (err) {
        if (err.message == ('Invalid JSON RPC response: ""' || 'Cannot read properties of undefined (reading "eth")')) {
          this.setState({ errorMessage: 'Metamask is not installed, please navigate to https://metamask.io/download/' });
        } else {
          this.setState({ errorMessage: err.message });
        }
      }
       this.setState({ loading: false });
    };

  render() {
    return (
      <Layout>
      <h3 style={{textAlign: "center"}}>Create a Post</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

          <Form.Field>
          <label>Title</label>
            <Input
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
          <label>Content</label>
            <Input
            value={this.state.content}
            onChange={event => this.setState({ content: event.target.value })}
            />
          </Form.Field>
          <h3> Choose file to send to IPFS </h3>
            <Input
              type = "file"
              onChange = {this.captureFile}
            />
            <Message error header="Oops" content={this.state.errorMessage} />
            <Button loading={this.state.loading} primary>Create</Button>
        </Form>
        <p>{this.state.result}</p>
      </Layout>
    )
  }
}

export default PostNew;
