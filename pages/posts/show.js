import React, { Component } from 'react';
import Post from '../../ethereum/post';
import Layout from '../../components/Layout';
import PostBox from '../../components/PostBox';
import CommentDetails from '../../components/CommentDetails';
import { Card, Button, Icon, Container, Header, Divider, Grid, Comment } from 'semantic-ui-react';


class PostShow extends Component {
    static async getInitialProps(props) {
    const post = Post(props.query.address);
    const address = props.query.address;
    const commentCount = await post.methods.getCommentsCount().call();

    //Do a single call to get the data. Like getSummary from campaigns
    const title = await post.methods.getTitle().call();
    const content = await post.methods.getContent().call();
    const upVotes = await post.methods.getUpVotes().call();

    const comments = await Promise.all(
      Array(parseInt(commentCount)).fill().map((element, index) => {
        return post.methods.comments(index).call()
      })
    );

    return { post, title, content, upVotes, address, comments };
    }

    renderComments() {
      return this.props.comments.map((comment, index) => {
      return
        <CommentDetails
        comment={comment}
        />
      })
    }


  render() {
    console.log(this.props.comments);
    return (
      <Layout>
      <PostBox
      post={this.props.address}
      title={this.props.title}
      content={this.props.content}
      upVotes={this.props.upVote}
      />
      <Comment.Group>
        {this.renderComments()}
      </Comment.Group>
      </Layout>
  );
  }
}

export default PostShow;
