import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import { Fragment } from "react";

export default function Users({ users, loading }) {
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
}
