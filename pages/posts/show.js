import React, { Component } from 'react';
import Post from '../../ethereum/post';
import Layout from '../../components/Layout';
import PostBox from '../../components/PostBox';
import CommentDetails from '../../components/CommentDetails';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import { Card, Button, Icon, Container, Header, Divider, Grid, Comment, Form, Input } from 'semantic-ui-react';
import moment from 'moment';


class PostShow extends Component {

      state = {
      comment: '',
      errorMessage: '',
      loading: false,
      commentIndex: 0
    };

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

    return { post, title, content, upVotes, address, comments, commentCount, address };
    }

  onSubmit = async (event) => {

  event.preventDefault();
  const accounts = await web3.eth.getAccounts();
  let time = moment().format('MMMM Do YYYY, h:mm:ss a');

  this.setState({ loading: true, errorMessage: '' });
  try {
    if (this.props.commentCount == 0) {
      await this.props.post.methods.createComment(this.state.commentIndex, this.state.comment, accounts[0], time).send({ from: accounts[0]});
    } else {
      this.setState({ commentIndex: this.props.commentCount})
      await this.props.post.methods.createComment(this.state.commentIndex, this.state.comment, accounts[0], time).send({ from: accounts[0]});
    }
  Router.replaceRoute(`/posts/${this.props.address}`);
} catch (err) {
  this.setState({ errorMessage: err.message });
}
this.setState({ loading: false, comment: '' })
};

    renderComments() {
      const _post = this.props.post;
      return this.props.comments.map((comment, index) => {
      return <CommentDetails comment={comment} post={_post} />;
      })
    }




  render() {
    return (
      <Layout>
      <PostBox
      post={this.props.address}
      title={this.props.title}
      content={this.props.content}
      upVotes={this.props.upVote}
      />
      <Comment.Group style={{background: 'white', borderRadius: '10px', padding: '10px'}}>
        {this.renderComments()}

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} reply>
          <Form.Field>
          <label>Say Something...</label>
            <Input labelPosition="right"
            value={this.state.comment}
            onChange={event => this.setState({ comment: event.target.value })}
            />
            </Form.Field>
          <Button loading={this.state.loading} content='Add Comment' labelPosition='left' icon='edit' primary />
        </Form>

      </Comment.Group>
      </Layout>
  );
  }
}

export default PostShow;
