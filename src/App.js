import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search github users
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

  const clearUsers = () => setUsers([]);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search
          searchUsers={searchUsers}
          clearUsers={clearUsers}
          users={users}
        />
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
}
