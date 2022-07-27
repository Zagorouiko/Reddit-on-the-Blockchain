import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Post from '../ethereum/post';
//import Layout from '../components/Layout';
import { Link } from '../routes';

class Homepage extends Component {
  static async getInitialProps() {
      const posts = await factory.methods.getDeployedPostAddress().call();

      let titles = [];
      let contents = [];
      //loop here using the address array ^^; grab the title/content and push into title/content array
      for (let i = 0; i < posts.length; i++) {
        const title = await Post(posts[i]).methods.getTitle().call();
        titles.push(title);
      }

      // for (let i = 0; i < posts.length; i++) {
      //   const title = await Post(posts[i]).methods.getContent().call();
      //   contents.push(content);
      // }

      //saves it to this.props
      return { posts: posts, titles: titles };
  }

  renderPosts() {
  //when a function is passed into map, it iterates over every item in the collection; items = address[i]
  const addresses = this.props.posts.map(address => {
    return {
      header: address,
      description: (
      address
      ),
      fluid: true
    }
  });

  const titles = this.props.titles.map(title => {
    return {
      header: title,
      description: (
        title
      ),
      fluid: true
    }
  });
  //From semantic UI library to build card group
  return <Card.Group items={titles} />
}

  render() {
  return(

    //Adds everything inside layout here to the layout.props.children inside the layout component
    //<Layout>
    <div>
      <Link route="/posts/new">
        <a>
        <Button floated="right" content="Create Post" icon="add circle" primary />
        </a>
      </Link>
      {this.renderPosts()}
    </div>
    //</Layout>
  );
}
}

export default Homepage;
