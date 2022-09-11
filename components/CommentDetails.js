import React, { Component } from 'react';
import { Comment, Divider, Icon, Message } from 'semantic-ui-react';
import Post from '../ethereum/post';
import { web3, metamaskStatus } from '../ethereum/web3';
import { Router } from '../routes';

class CommentDetails extends Component {

  state = {
    errorMessage: '',
    hidden: true
  };

  upVote = async (post, comment) => {
    try {
    const accounts = await web3.eth.getAccounts();
    await post.methods.commentUpVote(comment.index).send({
      from: accounts[0],
      value: web3.utils.toWei('.001', 'ether'),
    })

  } catch (err) {

    if (err.message == ('Invalid JSON RPC response: ""' || 'Cannot read properties of undefined (reading "eth")')) {
      this.setState({ hidden: false });
      this.setState({ errorMessage: 'Metamask is not installed, please navigate to' + <a href="https://metamask.io/download/">https://metamask.io/download/</a> });
    } else {
      this.setState({ hidden: false });
      this.setState({ errorMessage: 'Already Voted' });
    }

    setTimeout(() => {
      this.setState({ hidden: true, errorMessage: '' });
  }, 10000);

  }
    Router.replaceRoute(`/posts/${post._address}`);
  }

  render() {
    const { comment, post } = this.props;
    return (
      <Comment>
      <Comment.Content>
        <Comment.Author as='a'>u/{comment.owner} </Comment.Author>
        <Comment.Metadata>
          <div>{comment.date}</div>
        </Comment.Metadata>
        <Comment.Text style={{marginLeft: '10px'}}>{comment.comment}</Comment.Text>
      </Comment.Content>
      {comment.upVoteCommentCount}   <i class="thumbs up outline icon" style={{color:"#ff4500", cursor: "pointer"}} onClick={() => this.upVote(post, comment)}></i>
      <Message hidden={this.state.hidden} error content={this.state.errorMessage}/>
      <Divider />
      </Comment>
    );
  }
}

export default CommentDetails;
