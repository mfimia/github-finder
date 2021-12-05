import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import { Fragment, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

const Users = () => {
  // We use this object to get everything from the context (all values)
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };
  const userCards = users.map((user) => <UserItem key={user.id} user={user} />);

  return (
    <Fragment>
      {loading ? <Spinner /> : <div style={userStyle}>{userCards}</div>}
    </Fragment>
  );
};

export default Users;
