import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
const uuid = require("uuid/v4");
let urlUsers = `http://localhost:3001/users/`;

export const AddUser = props => {
  const [value, setValue] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: ""
  });

  const { handleReload } = props;

  const { addUser } = useFetch();

  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
      user_id: uuid()
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      value.first_name === "" ||
      value.last_name === "" ||
      value.email === "" ||
      value.phone === "" ||
      value.address === ""
    )
      return;
    addUser(urlUsers, value);
    handleReload(true);
    setValue({
      user_id: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: ""
    });
  };
  return (
    <div>
      <div className="cow">
        <h2 style={{ margin: "20px" }}>Add User</h2>
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
              required
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
              required
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
              required
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
              required
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
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-info">
          Add User
        </button>
      </form>
    </div>
  );
};
