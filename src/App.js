import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
//import "./App.css";
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
      <Link to={`/posts/${post._id}`}>
        <div key={post._id} className="h-fit px-6 py-4 bg-slate-200 rounded-sm">
          <h2 className="text-3xl font-bold">{post.title}</h2>
          <hr className="w-4/5 h-1 bg-gray-400 mb-4"></hr>
          <div>{ReactHtmlParser(post.text)}</div>
        </div>
      </Link>
    );
  }

  return (
    <div>
      <Header />
      <div className="flex justify-center w-2/3 mx-auto">
        <div className="flex flex-col md:w-1/2 gap-6">{postList}</div>
      </div>
    </div>
  );
};

export default App;
