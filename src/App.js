import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Users />
      </div>
    </div>
  );
}
