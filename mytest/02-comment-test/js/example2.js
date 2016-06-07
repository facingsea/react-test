/**
 * Created by wangzhf on 2016/6/6.
 */

var CommentBox = React.createClass({
    render: function(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <Comment />
            </div>
        );
    }
});



var CommentList = React.createClass({
    render: function(){
        return (
            <div className="commentList">
                This is comment list.
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function(){
        return (
            <div className="commentForm">
                Hello World! I am a comment form.
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function(){
        return (
            <div className="comment" >
                This is comment content.
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById("content")
);