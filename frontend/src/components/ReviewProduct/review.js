import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost, fetchPost, createPost, updatePost } from "../store/posts";

/*
Export as the default a `PostForm` component that renders a form to either
create or edit a post. The form should determine whether it is a create or edit
form based on the URL. For a create form, it should pre-fill the form's `title`
and `body` fields from a blank post. For edit, it should grab the specified post
from the store and pre-fill the form's fields with the data from that post. (It
should also fetch the specified post from the database to ensure that it is in
the store.)  

Use controlled inputs and trigger the appropriate action upon submission. Label
the `title` field `Title` and use a text input; label the `body` field `Body`
and use a `textarea`. 
*/

export default function PostForm() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector(getPost(postId));

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [updatedTitle, setUpdatedTitle] = useState(post ? post.title : "");
  const [updatedBody, setUpdatedBody] = useState(post ? post.body : "");

  const handleCreate = (e) => {
    e.preventDefault();
    const post = { title, body };
    dispatch(createPost(post));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedPost = { ...post, title: updatedTitle, body: updatedBody };
    dispatch(updatePost(updatedPost));
  };

  useEffect(() => {
    if (postId) {
      dispatch(fetchPost(postId));
    }
  }, [dispatch, postId]);

  return (
    <div>
      {postId && post ? (
        <>
          <h1>Update Post</h1>
          <form onSubmit={handleUpdate}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              id="body"
              value={updatedBody}
              onChange={(e) => setUpdatedBody(e.target.value)}
            />
            <button type="submit">Update Post</button>
          </form>
        </>
      ) : (
        <>
          <h1>Create Post</h1>
          <form onSubmit={handleCreate}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit">Create Post</button>
          </form>
        </>
      )}
    </div>
  );
}
