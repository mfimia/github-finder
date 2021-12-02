export default function UserItem({ user }) {
  const { login, avatar_url, link_url } = user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={link_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
}
