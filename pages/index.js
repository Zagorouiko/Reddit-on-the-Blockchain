import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Post from '../ethereum/post';
import Layout from '../components/Layout';
import { Link } from '../routes';
import PostBox from '../components/PostBox';

class Homepage extends Component {
  static async getInitialProps() {
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

      return { posts, titles, contents, upVotes, address};
  }

//   renderPosts() {
//     var items = [];
//     for (let i = 0; i < this.props.posts.length; i++) {
//     var item =
//       {
//       header: "Votes: " + this.props.upVotes[i] + " // Posted by: " + this.props.posts[i],
//       description: this.props.contents[i],
//       meta:  this.props.titles[i],
//       fluid: true
//     }
//     items.push(item);
//   }
//     return <Card.Group items={items} />
// }

renderPostBox() {
  return this.props.posts.map((post, index) => {
    return <PostBox
    key={index}
    address={this.props.address[index]}
    post={this.props.posts[index]}
    title={this.props.titles[index]}
    content={this.props.contents[index]}
    upVotes={this.props.upVotes[index]}
    />;
  })
}

    render() {
    return(
      <Layout>
        {this.renderPostBox()}
      </Layout>
    );
  }
}

export default Homepage;
