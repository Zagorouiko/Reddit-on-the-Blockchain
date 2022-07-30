pragma solidity ^0.4.17;

contract PostFactory {
    address[] public deployedPostAddress;

    function createPost(string title, string content) public {
        Post newPost = new Post(msg.sender, title, content);
        deployedPostAddress.push(newPost);
    }

    function getDeployedPostAddress() public view returns (address[]) {
        return deployedPostAddress;
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

    function getTitle() public view returns(string) {
      return title;
    }

    function getContent() public view returns(string) {
      return content;
    }

     function getUpVotes() public view returns(uint) {
      return upVoteCount;
    }
}
