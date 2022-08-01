import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message, TextArea } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class PostNew extends Component {
  state = {
  title: '',
  content: '',
  errorMessage: '',
  loading: false
};

  onSubmit = async (event) => {
  event.preventDefault();

  this.setState({ loading: true });

  try {
  const accounts = await web3.eth.getAccounts();
  await factory.methods
  .createPost(this.state.title, this.state.content)
  .send({
    from: accounts[0]
  });

  Router.pushRoute('/');
} catch (err) {
  this.setState({ errorMessage: err.message })
}

this.setState({ loading: false })
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

          <Message error header="Oops" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>Create</Button>
        </Form>
      </Layout>
    )
  }
}

export default PostNew;
