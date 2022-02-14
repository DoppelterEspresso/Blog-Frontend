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
      <div key={comment._id} className="p-4 bg-slate-300 mb-10 rounded-sm">
        <h3 className="text-xl font-bold">{comment.author}:</h3>
        <p>{comment.text}</p>
      </div>
    );
  }

  console.log(post);

  return (
    <div>
      <Header />
      <div className="flex flex-col md:w-1/2 mx-auto p-6 bg-slate-200 rounded">
        <div id="post" className="w-11/12 mx-auto">
          <h2 className="text-3xl underline mb-2">{post.title}</h2>
          <div>{ReactHtmlParser(post.text)}</div>
          <span className="text-lg mt-4 rounded-lg px-4 bg-gray-300">
            {post.date_format}
          </span>
        </div>
        <hr />
        <div className="my-8">
          <h2 className="text-2xl font-bold ml-6">Comments:</h2>
          <div className="p-6">{commentList}</div>
          <hr />
          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default Post;
