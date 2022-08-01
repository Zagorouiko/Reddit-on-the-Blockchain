import React, { Component } from 'react';
import { Card, Button, Icon, Container, Header, Divider, Grid } from 'semantic-ui-react';
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
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={1}>
          <i class="arrow up icon"></i>
          {this.props.upVotes}
        </Grid.Column>
        <Grid.Column width={12}>
        <Container text style={{}}>
        <Container textAlign='left'>r/RedditOnTheBlockchain • Posted by u/{this.props.post}</Container>
          <Header as='h2'>{this.props.title}</Header>
          <Divider />
          <p>
            {this.props.content}
          </p>
        </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
  }
}

// <Container text style={{borderStyle: "outset", border: "1px solid grey", padding: "10px", margin: "20px"}}>
// <Container textAlign='left'>r/RedditOnTheBlockchain • Posted by u/{this.props.post}</Container>
//   <Header as='h2'>{this.props.title}</Header>
//   <Divider />
//   <p>
//     {this.props.content}
//   </p>
//   <i class="thumbs up outline icon"></i>
// </Container>

export default PostBox;
