import { useParams } from "react-router";

const CommentForm = () => {
  let { postid } = useParams();
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Leave a Comment</h1>
      <form
        action={`https://morning-escarpment-88966.herokuapp.com/api/posts/${postid}/comments`}
        method="POST"
        id="comment-form"
        className="flex flex-col"
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
        <button
          type="submit"
          id="comment-submit"
          className="mt-4 px-4 py-2 bg-sky-900 text-xl text-white md:w-1/3 mx-auto"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
