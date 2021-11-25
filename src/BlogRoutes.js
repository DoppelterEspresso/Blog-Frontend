import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Post from "./components/Post";
import About from "./components/About";

const BlogRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/posts/:postid" element={<Post />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BlogRoutes;
