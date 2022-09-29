import React, { Component } from 'react';
import { Card, Button, Icon, Container, Header, Divider, Grid, Message, Image } from 'semantic-ui-react';
import Post from '../ethereum/post';
import factory from '../ethereum/factory';
import { web3, metamaskStatus } from '../ethereum/web3';
import { Link } from '../routes';
import { Router } from '../routes';

class PostBox extends Component {

  state = {
    errorMessage: '',
    hidden: true,
    hiddenImage: true,
    metaMask: metamaskStatus,
    route: ''
  };

    static async getInitialProps(props) {
      const address = props.query.address;
      return { address };
    }

  componentWillMount() {
    if(this.props.imageHash !== '') {
      this.setState({ hiddenImage: false })
    } else {
      this.setState({ hiddenImage: true })
    }

    if(metamaskStatus == true) {
      this.setState({ route: '/posts/' + this.props.post })
    } else {
      this.setState({ route: '/NoMetamask'})
    }
  }

  upVote = async (event) => {
    try {
    const post = Post(this.props.post)
    const accounts = await web3.eth.getAccounts();
    await post.methods.upVote().send({
      from: accounts[0],
      value: web3.utils.toWei('.001', 'ether'),
    })

    Router.pushRoute('/');
  } catch (err) {

    if (err.message == 'Invalid JSON RPC response: ""') {
      this.setState({ hidden: false });
      this.setState({ errorMessage: 'Metamask is not installed, please navigate to https://metamask.io/download/' });
    } else {
      this.setState({ hidden: false });
      this.setState({ errorMessage: 'Already Voted' });
    }

    setTimeout(() => {
      this.setState({ hidden: true, errorMessage: '' });
  }, 10000);
  }

  // if (this.props.address) {
  //   Router.replaceRoute(`/posts/${this.props.address}`);
  // } else {
  //   Router.pushRoute('/');
  // }
}

  render() {
    return (
    <Grid padding='horizontally' textAlign='center' celled >
      <Grid.Row  style={{backgroundColor: 'white', opacity: 0.85}}>
        <Container text>
        <Container style={{paddingTop: '20px'}} textAlign='left'>r/RedditOnTheBlockchain • Posted by u/<b>{this.props.address}</b></Container>
        <Link route={this.state.route}>
        <div>

          <Header><p style={{textAlign: 'right', display: 'inline', paddingBottom: '40px', cursor: "pointer", float: 'right'}}><i class="arrow up icon" style={{marginRight: '0', color:"#ff4500", fontSize: "25px"}}  onClick={this.upVote} ></i>{this.props.upVotes} Upvotes</p></Header>
          <Header style={{paddingTop: '50px', paddingBottom: '20px'}}>  <p style={{textAlign: 'left', cursor: "pointer", display: 'inline'}}>{this.props.title}</p>
            </Header>
        </div>

        </Link>
            <p>
              <Image fluid wrapped hidden={this.state.hiddenImage}
                src={'https://leonidas.infura-ipfs.io/ipfs/' + this.props.imageHash}
                onError={(event) => event.target.style.display = 'none'}
                >
              </Image>
            </p>
            <Divider />
            <p style={{paddingTop: '20px', paddingBottom: '20px', textIndent: '5px'}}>{this.props.content}</p>

        <Message hidden={this.state.hidden} error content={this.state.errorMessage}/>
        </Container>
      </Grid.Row>
    </Grid>
  );
  }
}

export default PostBox;
