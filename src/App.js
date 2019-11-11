import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Users } from "./components/Users";
import UserInfo from "./components/UserInfo";
import { EditUser } from "./components/EditUser";
import { PostInfo } from "./components/PostInfo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route exact path={"/"} component={Users} />
            <Route exact path={"/user/:id"} component={UserInfo} />
            <Route exact path={"/edit/:id"} component={EditUser} />
            <Route exact path={"/post/:id"} component={PostInfo} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
