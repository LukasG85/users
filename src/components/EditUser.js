import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

let urlUsers = `http://localhost:3001/users/`;

export const EditUser = props => {
  const { match } = props;
  const { editUser, getUser, user } = useFetch();
  const [value, setValue] = useState({
    user_id: "",
    first_name: user.id,
    last_name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [edited, setEdited] = useState(false);

  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    editUser(`${urlUsers}/${user.id}`, value);
    setEdited(true);
    setValue({
      user_id: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: ""
    });
  };
  useEffect(() => {
    setValue({
      user_id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      address: user.address
    });
  }, [user]);

  useEffect(() => {
    getUser(`${urlUsers}${match.params.id}`);
  }, []);

  return (
    <div>
      <div className="cow">
        <h2 style={{ margin: "20px" }}>Edit User</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="formGroupFirstName">First Name</label>
            <input
              value={value.first_name}
              onChange={handleChange}
              type="text"
              name="first_name"
              className="form-control"
              id="formGroupFirstName"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupLastName">Last Name</label>
            <input
              value={value.last_name}
              onChange={handleChange}
              type="text"
              name="last_name"
              className="form-control"
              id="formGroupLastName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="formGroupEmail">Email</label>
            <input
              value={value.email}
              onChange={handleChange}
              type="email"
              name="email"
              className="form-control"
              id="formGroupEmail"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="formGroupPhone">Phone</label>
            <input
              value={value.phone}
              onChange={handleChange}
              type="tel"
              name="phone"
              className="form-control"
              id="formGroupPhone"
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormAddress">Address</label>
          <textarea
            value={value.address}
            onChange={handleChange}
            name="address"
            className="form-control"
            id="exampleFormAddress"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-info">
          Edit User
        </button>
      </form>
      <div className="row">
        <div className="col">
          <button className="btn btn-info">
            <Link to="/">Go to Users</Link>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">{edited && <h2>The user has been edited</h2>}</div>
      </div>
    </div>
  );
};
