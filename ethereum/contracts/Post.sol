pragma solidity ^0.4.17;

contract PostFactory {
    Post[] public deployedPost;

    function createPost(string title, string content) public {
        Post newPost = new Post(msg.sender, title, content);
        deployedPost.push(newPost);
    }

    function getDeployedPost() public view returns (Post[]) {
        return deployedPost;
    }
}

contract Post {
    address public originalPoster;
    string public title;
    string public content;
    uint public upVoteCount;

    function Post(address creator, string _title, string _content) public {
        originalPoster = creator;
        title = _title;
        content = _content;
    }

    function upVote() public payable{
        require(msg.value >= .001 ether);
        upVoteCount++;
        originalPoster.transfer(this.balance);
    }

    function getPostInfo() public view returns(string, string, address) {
      return (
          title,
          content,
          originalPoster
        );
    }
}
