import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import Post from '../ethereum/post';
import web3 from '../ethereum/web3';

class PostBox extends Component {

  upVote = async () => {
    const post = Post(this.props.post)

    const accounts = await web3.eth.getAccounts();
    await post.methods.upVote().send({
      from: accounts[0],
      value: web3.utils.toWei('.001', 'ether'),
    })
  }

  render() {
    return (
    <Card fluid>
    <Card.Content header={this.props.post}  />
    <Card.Content header={this.props.upVotes}  />
    <Card.Content description={this.props.title} />
    <Card.Content extra>
      {this.props.content}
    </Card.Content>
    <Button color="green" onClick={this.upVote}><Icon name='heart' /></Button>
  </Card>
  );
  }
}

export default PostBox;
