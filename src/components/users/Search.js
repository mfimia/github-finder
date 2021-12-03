import { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, clearUsers, users }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUsers(text);
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
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
};

export default Search;
