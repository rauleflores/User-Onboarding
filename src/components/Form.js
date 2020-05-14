import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputName: {
    width: "75%",
    height: "28px",
    textAlign: "center",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    visibility: "hidden",
  },
  span: {
    fontSize: "1px",
  },
  input: {
    width: "50%",
    height: "28px",
    marginBottom: "10px",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  rowTerms: {
    width: "100%",
    marginBottom: "30px",
    marginTop: "40px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  termsLabel: {
    width: "75%",
    fontSize: "22px",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  submit: {
    marginTop: "20px",
    width: "28%",
    height: "32px",
    backgroundColor: "lightslategrey",
    border: "2px single  #998877",
    borderRadius: "5px",
  },
});

export default function Form(props) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms_of_service: "",
    submit: "",
  });

  const classes = useStyles();

  const formSubmit = (ev) => {
    ev.preventDefault();
    console.log("Form submitted!");
    setFormState({
      name: "",
      email: "",
      password: "",
      terms_of_service: "",
      submit: "",
    });
  };

  const inputChange = (ev) => {
    setFormState(ev.target.value);
    console.log(ev.target.value);
  };
  return (
    <form autoComplete="off" className={classes.root} onSubmit={formSubmit}>
      <div className={classes.row}>
        <div>
          <label htmlFor="firstName" className={classes.label}>
            <span className={classes.span}>What is your first name?</span>
          </label>
          <input
            id="name"
            name="firstName"
            placeholder="Enter your first name:"
            value={formState.firstName}
            onChange={inputChange}
            className={classes.inputName}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={classes.label}>
            <span className={classes.span}>What is your name?</span>
          </label>
          <input
            id="name"
            name="lastName"
            placeholder="Enter your last name:"
            value={formState.lastName}
            onChange={inputChange}
            className={classes.inputName}
          />
        </div>
      </div>
      <div className={classes.column}>
        <label htmlFor="email" className={classes.label}>
          <span className={classes.span}>
            Please enter your email address now.
          </span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address:"
          value={formState.email}
          onChange={inputChange}
          className={classes.input}
        />
      </div>
      <div className={classes.column}>
        <label htmlFor="password" className={classes.label}>
          <span className={classes.span}>Create a password.</span>
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Create a password:"
          value={formState.name}
          onChange={inputChange}
          className={classes.input}
        />
      </div>
      <div className={classes.rowTerms}>
        <label htmlFor="terms_of_service" className={classes.termsLabel}>
          {"Do you agree to the"}
          <br />
          {"Terms of Service?"}
          <input
            type="checkbox"
            id="terms_of_service"
            name="terms_of_service"
            value={formState.terms_of_service}
            onChange={inputChange}
          />
        </label>
      </div>
      <div className={classes.column}>
        <label htmlFor="submit" className={classes.label} />
        <button
          id="submit"
          name="submit"
          value={formState.submit}
          onChange={inputChange}
          className={classes.submit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
