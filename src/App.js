import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/posts")
      .then(response => response.json())
      .then((result) => {
        setPosts(result);
        console.log(posts)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  let postList = []

  for (let post of posts) {
    postList.push(
      <div key={post.title}>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      </div>
    )
  }

  return(
    <div>
      {postList}
    </div>
  )
}

export default App;
