import { useParams } from "react-router"

const CommentForm = () => {
    let { postid } = useParams()
    return (
        <div>
            <form action={`http://127.0.0.1:5000/api/posts/${postid}/comments`} method="POST">
                <label for="author" /> Your Name
                <input type="text" required="true" name="author" />
                <label for="commentText" /> Comment
                <textarea name="commentText" required="true"></textarea>
                <input type="hidden" name="postUrl" value={window.location.href} />
                <button type="submit">Submit Comment</button>
            </form>
        </div>
    )
}

export default CommentForm;