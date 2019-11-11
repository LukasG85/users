import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import AddComments from "./AddComments";
let urlComments = `http://localhost:3001/comments`;
let urlPost = `http://localhost:3001/posts`;

export const PostInfo = props => {
  const [reloadComments, setReloadComments] = useState(false);
  const { getComments, comments, getPost, postInfo } = useFetch();
  const { match } = props;

  const handleReload = load => {
    setReloadComments(load);
  };

  useEffect(() => {
    getComments(urlComments, match.params.id);
    getPost(`${urlPost}/${match.params.id}`);
    setReloadComments(false);
  }, [reloadComments]);

  const { title, body, id } = postInfo;

  return (
    <div>
      <div className="row">
        <div style={{ margin: "20px 0" }} className="col">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h2>Add Comment</h2>
          <AddComments handleReload={handleReload} postId={id} />
        </div>
        <div className="col-md-6">
          <h2>Comments</h2>
          {comments &&
            comments.map(comment => (
              <div key={comment.body}>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
                <em>{comment.email}</em>
              </div>
            ))}
        </div>
      </div>

      <button onClick={() => props.history.goBack()} className="btn btn-info">
        Back
      </button>
    </div>
  );
};
