import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
let url = `http://localhost:3001/users`;

export const User = props => {
  const { first_name, last_name, email, id } = props.user;
  const { index } = props;
  const { handleReload } = props;
  const { deleteUser } = useFetch();

  const handleDelete = () => {
    deleteUser(`${url}/${id}`);
    handleReload(true);
  };

  return (
    <>
      <th scope="row">{index + 1}.</th>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}z</td>
      <td className="btn-view">
        <button className="btn btn-success">
          <Link to={`/user/${id}`}>View</Link>
        </button>
      </td>
      <td className="btn-edit">
        <button className="btn btn-info">
          <Link to={`/edit/${id}`}>Edit</Link>
        </button>
      </td>
      <td className="btn-remove">
        <button onClick={handleDelete} className="btn btn-danger">
          Remove
        </button>
      </td>
    </>
  );
};
