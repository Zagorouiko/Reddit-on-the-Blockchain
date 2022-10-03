import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Post from '../ethereum/post';
import Layout from '../components/Layout';
import { Link } from '../routes';
import PostBox from '../components/PostBox';
require('events').EventEmitter.defaultMaxListeners = 15;

class Homepage extends Component {
  static async getInitialProps() {
    require('events').EventEmitter.defaultMaxListeners = 15;
      const posts = await factory.methods.getDeployedPostAddress().call();

      const titles = await Promise.all(posts.map(async (title) => {
        return Post(title).methods.getTitle().call();
      }));

      const contents = await Promise.all(posts.map(async (content) => {
        return Post(content).methods.getContent().call();
      }));

      const upVotes = await Promise.all(posts.map(async (upVote) => {
        return Post(upVote).methods.getUpVotes().call();
      }));

      const address = await Promise.all(posts.map(async (address) => {
        return Post(address).methods.getAddress().call();
      }));

      const imageHashes = await Promise.all(posts.map(async (imageHash) => {
        return Post(imageHash).methods.getHash().call();
      }));



      return { posts, titles, contents, upVotes, address, imageHashes};
  }

renderPostBox() {
  const postBoxList = this.props.posts.map((post, index) => {
    return <PostBox
    key={index}
    address={this.props.address[index]}
    post={this.props.posts[index]}
    title={this.props.titles[index]}
    content={this.props.contents[index]}
    upVotes={this.props.upVotes[index]}
    imageHash={this.props.imageHashes[index]}
    />;
  })

    return postBoxList.sort(function(a, b) {
      if (a.props.upVotes < b.props.upVotes) {
        return 1;
      }
      if (a.props.upVotes > b.props.upVotes) {
        return -1;
      }
      return 0;
    });
}

    render() {
      require('events').EventEmitter.defaultMaxListeners = 15;
        return(
          <Layout>
            {this.renderPostBox()}
          </Layout>
        );
      }
    }

export default Homepage;
