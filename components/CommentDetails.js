import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';


//Anything inside Link gets a click event added
class CommentsDetails extends Component {

  render() {
    const { comment } = this.props;
    return (
      <Comment>
      <Comment.Content>
        <Comment.Author as='a'>{comment.owner}</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>{comment.comment}</Comment.Text>
      </Comment.Content>
      </Comment>
    );
  }
}

export default CommentDetails;
