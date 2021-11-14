import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Post from "./components/Post"


const BlogRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/posts/:postid" element={<Post />} />
            </Routes>
        </BrowserRouter>
    )
}

export default BlogRoutes