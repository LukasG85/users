import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import AddPost from "./AddPost";
import { Posts } from "../components/Posts";
let urlUser = `http://localhost:3001/users/`;
let urlPosts = `http://localhost:3001/posts`;

const UserInfo = ({ match }) => {
  const [reload, setReload] = useState(false);
  const { user, getUser, getUserPosts, userPosts } = useFetch();
  const { first_name, last_name, email, address } = user;

  const handlereload = load => {
    setReload(load);
  };
  useEffect(() => {
    getUser(`${urlUser}${match.params.id}`);
  }, []);

  useEffect(() => {
    setReload(false);
    getUserPosts(urlPosts, match.params.id);
  }, [reload]);

  return (
    <div>
      <div className="row">
        <div className="col">
          <h1 style={{ margin: "20px" }}>User</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          {user.length === 0 ? (
            <h2>Loading User...</h2>
          ) : (
            <div>
              <h2>First Name: {first_name}</h2>
              <h3>Last Name: {last_name}</h3>
              <p>Email: {email}</p>
              <p>Address: {address}</p>
            </div>
          )}
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col">
              <AddPost handlereload={handlereload} userId={user.id} />
            </div>
          </div>
        </div>

        <div className="col">
          {userPosts.length > 0 && (
            <Posts
              handlereload={handlereload}
              userPosts={userPosts}
              userId={user.id}
            />
          )}
        </div>
      </div>
      <div className="row">
        <button className="btn btn-info">
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
