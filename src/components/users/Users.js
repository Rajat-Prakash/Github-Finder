import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner.js";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={usersStyle}>
        {users.map((user) => (
          <div key={user.id}>
            <UserItem user={user} />
          </div>
        ))}
      </div>
    );
  }
};

const usersStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
