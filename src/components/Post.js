import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
    const { postid } = useParams();
    const [ post, setPost] = useState();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/api/posts/${postid}`)
            .then(response => response.json())
            .then((result) => {
                setPost(result);
            })
            .catch(err => {
                console.log(err)
            })
        fetch(`http://127.0.0.1:5000/api/posts/${postid}/comments`)
            .then(response => response.json())
            .then((result) => {
                setComments(result);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    let commentList =  [];

    for (let comment of comments) {
        commentList.push(
            <div key={comment._id}>
                <h3>{comment.author}</h3>
                <p>{comment.text}</p>
            </div>
        )
    }

    return (
        <div>
            <div>
                <h2>{post.title}</h2>
                <p>{post.text}</p>
                <span>{post.timestamp}</span>
            </div>
            <hr />
            {commentList}
        </div>
    )

}

export default Post;