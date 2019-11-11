import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
let urlPosts = `http://localhost:3001/posts`;

const AddPost = ({ userId, handlereload }) => {
  const [value, setValue] = useState({ user_id: "", title: "", body: "" });

  const { addPost } = useFetch();

  const handleChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value, user_id: userId });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.title === "" || value.body === "") return;
    addPost(urlPosts, value);
    handlereload(true);
    setValue({ title: "", body: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="formGroupTitle">Title</label>
        <input
          value={value.title}
          onChange={handleChange}
          type="text"
          name="title"
          className="form-control"
          id="formGroupTitle"
          placeholder="Example input"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormPost">Post</label>
        <textarea
          value={value.body}
          onChange={handleChange}
          name="body"
          className="form-control"
          id="exampleFormPost"
          rows="3"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success">
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
