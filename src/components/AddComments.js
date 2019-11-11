import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
const uuid = require("uuid/v4");
let url = `http://localhost:3001/users`;
let urlComments = `http://localhost:3001/comments/`;

const AddComments = ({ postId, handleReload }) => {
  const [value, setValue] = useState({
    id: "",
    post_id: "",
    name: "",
    email: "",
    body: ""
  });

  const { addComment, getUsers, users } = useFetch();

  const handleChange = e => {
    setValue({
      ...value,
      post_id: postId,
      [e.target.name]: e.target.value,
      id: uuid()
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.name === "" || value.body === "" || value.email === "") return;
    addComment(urlComments, value);
    handleReload(true);
    setValue({ id: "", post_id: "", name: "", email: "", body: "" });
  };
  useEffect(() => {
    getUsers(url);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="formGroupNameComment">Name</label>
          <select
            name="name"
            value={value.name}
            onChange={handleChange}
            className="form-control"
            id="formGroupNameComment"
            required
          >
            <option>Select user</option>
            {users.map(user => (
              <option
                className="form-control"
                id="formGroupNameComment"
                key={user.first_name}
                value={`${user.first_name} ${user.last_name}`}
              >
                {user.first_name} {user.last_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="formGroupEmailComment">Email</label>
          <input
            value={value.email}
            onChange={handleChange}
            type="email"
            name="email"
            className="form-control"
            id="formGroupEmailComment"
            placeholder="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormComment">Comment</label>
          <textarea
            value={value.body}
            onChange={handleChange}
            name="body"
            className="form-control"
            id="exampleFormComment"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-info">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default AddComments;
