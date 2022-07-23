pragma solidity ^0.4.17;

contract PostFactory {
    address[] public deployedPosts;
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
}
