import { useState } from "react";
import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge,id) => {
    setUsersList((prevList) => {
      {
      return  [...prevList, { name: uName, age: uAge,ranid:id }];
      }
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
