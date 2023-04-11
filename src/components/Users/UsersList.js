import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={Math.random() * 100}>
            name: {user.name} & age: {user.age} years
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
