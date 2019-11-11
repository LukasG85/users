import { useState } from "react";

export const useFetch = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [postInfo, setPostInfo] = useState([]);

  const getUsers = async url => {
    const response = await fetch(url);
    const json = await response.json();
    setUsers(json);
  };

  const getUser = async url => {
    const response = await fetch(url);
    const json = await response.json();
    setUser(json);
  };

  const deleteUser = async url => {
    fetch(url, {
      method: "DELETE"
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
  };

  const getUserPosts = async (url, id) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        DataStore: {
          EagerDataReload: false
        }
      }
    });

    const json = await response.json();
    const postsUser = json.filter(post => post.user_id === id);
    setUserPosts(postsUser);
  };

  const addPost = (url, data) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  const deletePost = url => {
    fetch(url, {
      method: "DELETE"
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
  };

  const addUser = (url, data) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  const editUser = (url, data) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  const getComments = async (url, id) => {
    const response = await fetch(url);
    const json = await response.json();
    const comments = json.filter(comment => comment.post_id === id);
    setComments(comments);
  };

  const getPost = async url => {
    const response = await fetch(url);
    const json = await response.json();
    setPostInfo(json);
  };

  const addComment = (url, data) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  return {
    users,
    getUsers,
    getUser,
    user,
    userPosts,
    getUserPosts,
    addPost,
    deletePost,
    deleteUser,
    addUser,
    editUser,
    getComments,
    comments,
    getPost,
    postInfo,
    addComment
  };
};
