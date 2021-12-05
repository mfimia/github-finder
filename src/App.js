import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import Alert from "./components/users/Alert";
import GithubState from "./context/github/GithubState";
import "./App.css";

export default function App() {
  const [alert, setAlert] = useState({ msg: null, type: null });

  const displayAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => setAlert({ msg: null, type: null }), 3000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Routes>
              <Route
                path="/"
                element={
                  <Fragment>
                    <Search displayAlert={displayAlert} />
                    <Users />
                  </Fragment>
                }
              />
              <Route excact path="/about" element={<About />} />
              <Route path={`/user/:id`} element={<User />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}
