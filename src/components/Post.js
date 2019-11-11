import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
let urlPosts = `http://localhost:3001/posts/`;

export const Post = props => {
  const { post } = props;
  const { handlereload } = props;
  const { deletePost, getPost } = useFetch();

  const delPost = () => {
    deletePost(`${urlPosts}${post.id}`);
    handlereload(true);
  };

  useEffect(() => {
    getPost(`${urlPosts}/${post.id}`);
  }, []);

  return (
    <div key={post.id}>
      <h3 style={{ margin: "20px" }}>Title: </h3>
      <h6>{post.title}</h6>
      <p>Body: {post.body}</p>
      <button onClick={delPost} className="btn btn-danger">
        Delete Post
      </button>
      <button className="btn btn-info">
        <Link to={`/post/${post.id}`}>Comments</Link>
      </button>
    </div>
  );
};
