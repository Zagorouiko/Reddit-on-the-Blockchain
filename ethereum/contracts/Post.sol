pragma solidity ^0.4.17;

contract PostFactory {
    address[] public deployedPost;

    function createPost(string title, string content) public {
        address newPost = new Post(msg.sender, title, content);
        deployedPost.push(newPost);
    }

    function getDeployedPost() public view returns (address[]) {
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
        require(msg.value >= 1 ether);
        upVoteCount++;
        originalPoster.transfer(this.balance);
    }
}
