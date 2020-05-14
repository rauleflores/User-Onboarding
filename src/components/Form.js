import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  label: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  input: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  terms: {
    fontSize: "24px",
  },
});

export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms_of_service: "",
    submit: "",
  });

  const classes = useStyles();

  const changeHandler = (ev) => {
    setFormState(ev.target.value);
    console.log(ev.target.value);
  };
  return (
    <form
      autoComplete="off"
      className={classes.root}
      onSubmit={(ev) => {
        ev.preventDefault();
        setFormState({
          name: "",
          email: "",
          password: "",
          terms_of_service: "",
          submit: "",
        });
      }}
    >
      <label htmlFor="name" className={classes.label}>
        Name
      </label>
      <input
        id="name"
        name="name"
        placeholder="Enter your name:"
        value={formState.name}
        onChange={changeHandler}
      />
      <label htmlFor="email" className={classes.label}>
        Email
      </label>
      <input
        id="email"
        name="email"
        placeholder="Enter your email address:"
        value={formState.email}
        onChange={changeHandler}
      />
      <label htmlFor="password" className={classes.label}>
        Password
      </label>
      <input
        id="password"
        name="password"
        placeholder="Create a password:"
        value={formState.name}
        onChange={changeHandler}
      />
      <div className={classes.label}>
        <label htmlFor="terms_of_service" className={classes.terms}>
          Terms of Service Read?:
        </label>
        <input
          type="checkbox"
          id="terms_of_service"
          name="terms_of_service"
          value={formState.terms_of_service}
          onChange={changeHandler}
        />
      </div>
      <label htmlFor="submit" className={classes.label} />
      <button
        id="submit"
        name="submit"
        value={formState.submit}
        onChange={changeHandler}
      >
        Submit
      </button>
    </form>
  );
}
