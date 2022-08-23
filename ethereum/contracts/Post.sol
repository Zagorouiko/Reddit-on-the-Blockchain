pragma solidity ^0.4.26;

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

    struct Comment {
        uint index;
        address originalCommentPoster;
        string comment;
        address owner;
        string date;
        uint upVoteCommentCount;
        mapping(address => bool) commentUpVoters;
    }

    address public originalPoster;
    string public title;
    string public content;
    uint public upVoteCount;
    Comment[] public comments;
    uint public commentsCount;
    mapping(address => bool) upVoters;


    constructor(address creator, string _title, string _content) public {
        originalPoster = creator;
        title = _title;
        content = _content;
        commentsCount = 0;
    }

    function upVote() public payable{
            require(!upVoters[msg.sender], 'Already upvoted post');
            require(msg.value >= .001 ether);
            upVoters[msg.sender] = true;
            upVoteCount++;
            originalPoster.transfer(address(this).balance);
    }

    function commentUpVote(uint index) public payable{
            Comment storage comment = comments[index];
            require(!(comment.commentUpVoters[msg.sender]), 'Already upvoted comment');
            require(msg.value >= .001 ether);
            comment.commentUpVoters[msg.sender] = true;
            comment.upVoteCommentCount++;
            comment.originalCommentPoster.transfer(address(this).balance);
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

    function getAddress() public view returns(address) {
      return originalPoster;
    }

    function createComment(uint _index, string _comment, address _owner, string _date) public  {
        Comment memory newComment = Comment({
            index: _index,
            originalCommentPoster: msg.sender,
            comment: _comment,
            owner: _owner,
            date: _date,
            upVoteCommentCount: 0
        });
        commentsCount++;
        comments.push(newComment);
    }

    function getCommentsCount() public view returns(uint) {
        return comments.length;
    }

    function getComments() private view returns(Comment[]) {
        return comments;
    }

    function getCommentsUpvoteCount(uint index) private view returns(uint) {
    return comments[index].upVoteCommentCount;
    }
}
