import React, { Component } from 'react';
import { Comment, Divider, Icon } from 'semantic-ui-react';
import Post from '../ethereum/post';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

//Anything inside Link gets a click event added
class CommentDetails extends Component {

  upVote = async (post, comment) => {
    const accounts = await web3.eth.getAccounts();
    await post.methods.commentUpVote(comment.index).send({
      from: accounts[0],
      value: web3.utils.toWei('.001', 'ether'),
    })
    Router.replaceRoute(`/posts/${post.methods.getAddress().call()}`);
  }

  render() {
    const { comment, post } = this.props;
    return (
      <Comment>
      <Comment.Content>
        <Comment.Author as='a'>u/{comment.owner} </Comment.Author>{comment.index}
        <Comment.Metadata>
          <div>{comment.date}</div>
        </Comment.Metadata>
        <Comment.Text style={{marginLeft: '10px'}}>{comment.comment}</Comment.Text>
      </Comment.Content>
      {comment.upVoteCommentCount}   <i class="thumbs up outline icon" style={{color:"#ff4500", cursor: "pointer"}} onClick={() => this.upVote(post, comment)}></i>
      <Divider />
      </Comment>
    );
  }
}

export default CommentDetails;
