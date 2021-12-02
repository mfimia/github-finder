import { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUsers(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          onChange={handleChange}
          value={text}
        />
        <input type="submit" className="btn btn-dark btn-block" />
      </form>
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
};

export default Search;
