import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { User } from "./User";
import { AddUser } from "./AddUser";
let url = `http://localhost:3001/users`;

export const Users = () => {
  const [reloadUsers, setReloadUsers] = useState(false);
  const { users, getUsers } = useFetch();

  const handleReload = load => {
    setReloadUsers(load);
  };

  useEffect(() => {
    getUsers(url);
    setReloadUsers(false);
  }, [reloadUsers]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 style={{ margin: "20px" }}>Users</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="table-responsive">
            {users.length === 0 ? (
              <h2>Loading...</h2>
            ) : (
              <table className="table table-sm table-hover table-transactions">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user, index) => (
                    <tr key={index} className="hover-items">
                      <User
                        handleReload={handleReload}
                        user={user}
                        index={index}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <AddUser handleReload={handleReload} />
        </div>
      </div>
    </div>
  );
};
