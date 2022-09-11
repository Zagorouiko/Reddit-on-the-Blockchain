import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Message } from 'semantic-ui-react';

class NoMetamask extends Component {
    render() {
      return (
        <Layout>
        <Message>
        <Message.Header>No Metamask detected, navigate to <a href='https://metamask.io/download'>https://metamask.io/download/</a></Message.Header>
        <Message.Header>Connect wallet to:</Message.Header>
        <Message.List>
          <Message.Item>Create Posts</Message.Item>
          <Message.Item>Upvote Posts</Message.Item>
          <Message.Item>Create comments on post</Message.Item>
          <Message.Item>Upvote comments</Message.Item>
        </Message.List>
      </Message>
        </Layout>
      )
    }
  }

export default NoMetamask;
