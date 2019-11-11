import React from "react";
import { Post } from "../components/Post";

export const Posts = props => {
  const { userPosts } = props;
  const { handlereload } = props;

  return (
    <div>
      {userPosts.length === 0 ? (
        <h2>Loading User Posts...</h2>
      ) : (
        userPosts.map(post => (
          <Post key={post.id} post={post} handlereload={handlereload} />
        ))
      )}
    </div>
  );
};
