pragma solidity ^0.4.17;

contract Post {
    address public originalPoster;
    string public title;
    string public content;
    uint public upVoteCount;

    function Post(string _title, string _content) public {
        originalPoster = msg.sender;
        title = _title;
        content = _content;
    }

    function upVote() public payable{
        require(msg.value > 1);
        upVoteCount++;
    }
}
