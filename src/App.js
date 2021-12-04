import "./App.css";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useRouteMatch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
// import User from "./components/users/User";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import axios from "axios";
import Alert from "./components/users/Alert";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ msg: null, type: null });
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  //   const userLogin = useRouteMatch("/user/:login");
  // Search GitHub users via GitHub API
  const searchUsers = (text) => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((res) => {
        setUsers(res.data.items);
        setLoading(false);
      });
  };

  // Get single GitHub user via GitHub API
  //   const getUser = async (username) => {
  //     setLoading(true);
  //     const res = await axios.get(
  //       `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     setUser(res.data);
  //     setLoading(false);
  //   };

  //   Get user repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:adc&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  const clearUsers = () => setUsers([]);

  const displayAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => setAlert({ msg: null, type: null }), 3000);
  };

  return (
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
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    users={users}
                    displayAlert={displayAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              }
            />
            <Route excact path="/about" element={<About />} />
            {/* How to set the route so it takes the login info dynamically? */}
            {/* props => {...props} */}
            {/* <Route
              path="/user/:login"
              element={<User getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} loading={loading} />}
            /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
