import { useContext, useState } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/GithubContext";

const Search = ({ clearUsers, users, displayAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    text
      ? githubContext.searchUsers(text)
      : displayAlert("Please write something!", "light");
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          onChange={handleChange}
          value={text}
        />
        <input type="submit" className="btn btn-dark btn-block" />
      </form>
      {/* Clear button only displayed when there are users to be cleared */}
      {users.length > 0 && (
        <button onClick={clearUsers} className="btn btn-light btn-block">
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
};

export default Search;
