import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://api.github.com/users").then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
}
