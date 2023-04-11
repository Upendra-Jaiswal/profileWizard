import { React } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorState, setErrorState] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const resetValues = () => {
      setEnteredUsername("");
      setEnteredAge("");
    };

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorState({
        title: "We got Error (Invalid input)",
        message: "please enter something",
      });
      return;
    }

    if (+enteredAge < 1) {
      setErrorState({
        title: "We got error (Invalid Age)",
        message: "please be postive",
      });
      resetValues();
      return;
    }

    // console.log(enteredUserName, enteredAge);

    props.onAddUser(enteredUserName, enteredAge);

    resetValues();
  };

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const onResetHandler = () => {
    setErrorState(null);
  };

  return (
    <div>
      {errorState && (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          onConfirm={onResetHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
