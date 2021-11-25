import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://morning-escarpment-88966.herokuapp.com/api/posts")
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let postList = [];
  //console.log(posts)

  for (let post of posts) {
    postList.push(
      <Link to={`/posts/${post._id}`} className="post-link">
        <div key={post._id} className="post-container">
          <h2>{post.title}</h2>
          <div>{ReactHtmlParser(post.text)}</div>
        </div>
      </Link>
    );
  }

  return (
    <div>
      <Header />
      <div className="flex-container content">
        <div className="all-posts">{postList}</div>
      </div>
    </div>
  );
};

export default App;
