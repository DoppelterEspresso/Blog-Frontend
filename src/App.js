import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/posts")
      .then(response => response.json())
      .then((result) => {
        setPosts(result);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  let postList = []
  console.log(posts)


  for (let post of posts) {
    postList.push(
      <Link to={`/posts/${post._id}`}>
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
          <hr />
        </div>
      </Link>
    )
  }

  return(
    <div>
      {postList}
    </div>
  )
}

export default App;
