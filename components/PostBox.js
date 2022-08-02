import React, { Component } from 'react';
import { Card, Button, Icon, Container, Header, Divider, Grid } from 'semantic-ui-react';
import Post from '../ethereum/post';
import web3 from '../ethereum/web3';
import { Link } from '../routes';

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
      <Grid.Row style={{backgroundColor: "white"}}>
        <Grid.Column width={1} style={{justifyContent: 'center', textAlign: "center"}}>
          <i class="arrow up icon" style={{color:"#ff4500", fontSize: "35px", cursor: "pointer"}} onClick={this.upVote} ></i>
          <span style={{lineBreak: "strict"}}>{this.props.upVotes}</span>
          <i class="arrow down icon" style={{color:"black", paddingTop: "15px", fontSize: "35px"}}></i>
        </Grid.Column>
        <Grid.Column width={12}>
        <Container text style={{}}>
        <Container textAlign='left'>r/RedditOnTheBlockchain • Posted by u/<b>{this.props.post}</b></Container>

        <Link route={`/posts/${this.props.post}`}>
          <a style={{color: "black"}}>
            <Header as='h2'>{this.props.title}</Header>
            <Divider />
            <p>
              {this.props.content}
            </p>
          </a>
        </Link>

        </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
  }
}

export default PostBox;
