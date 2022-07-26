import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
//import Layout from '../components/Layout';
import { Link } from '../routes';

class Homepage extends Component {
  static async getInitialProps() {
      const posts = await factory.methods.getDeployedPost().call();
      //saves it to this.props
      return { posts: posts };
  }

  renderPosts() {
    console.log(this.props.posts)
  //when a function is passed into map, it iterates over every item in the collection; items = address[i]
  const items = this.props.posts.map(item => {
    return {
      header: item,
      description: (
        <Link route={`/posts/${item}`}>
          <a></a>
        </Link>
      ),
      fluid: true
    }
  });
  //From semantic UI library to build card group
  return <Card.Group items={items} />
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
