import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import Header from "./Header";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const Post = () => {
  const { postid } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://morning-escarpment-88966.herokuapp.com/api/posts/${postid}`)
      .then((response) => response.json())
      .then((result) => {
        setPost(result);
      })
      .catch((err) => {
        console.log(err);
      });
    fetch(
      `https://morning-escarpment-88966.herokuapp.com/api/posts/${postid}/comments`
    )
      .then((response) => response.json())
      .then((result) => {
        setComments(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postid]);

  let commentList = [];

  for (let comment of comments) {
    commentList.push(
      <div key={comment._id} className="comment">
        <h3>{comment.author}:</h3>
        <p>{comment.text}</p>
      </div>
    );
  }

  console.log(post);

  return (
    <div>
      <Header />
      <div className="flex-container content">
        <div id="post">
          <h2>{post.title}</h2>
          <div>{ReactHtmlParser(post.text)}</div>
          <span>{post.date_format}</span>
        </div>
        <hr />
        <h2>Comments:</h2>
        <div className="all-comments">{commentList}</div>
        <hr />
        <CommentForm />
      </div>
    </div>
  );
};

export default Post;
