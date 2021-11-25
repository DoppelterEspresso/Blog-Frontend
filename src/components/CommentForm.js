import { useParams } from "react-router";

const CommentForm = () => {
  let { postid } = useParams();
  return (
    <div id="comment-form-container">
      <h1>Leave a Comment</h1>
      <form
        action={`https://morning-escarpment-88966.herokuapp.com/api/posts/${postid}/comments`}
        method="POST"
        id="comment-form"
      >
        <label htmlFor="author" /> Your Name
        <input
          type="text"
          required={true}
          name="author"
          className="comment-input"
        />
        <label htmlFor="commentText" /> Comment
        <textarea
          name="commentText"
          required={true}
          rows="10"
          cols="10"
          className="comment-input"
        ></textarea>
        <input type="hidden" name="postUrl" value={window.location.href} />
        <button type="submit" id="comment-submit">
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
