import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  outerCont: {
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
    width: "80%",
    height: "28px",
    marginBottom: "10px",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  termsCont: {
    marginBottom: "20px",
    marginTop: "40px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  terms: {
    fontSize: "24px",
  },
  submit: {
    marginTop: "20px",
    width: "48%",
    height: "32px",
    backgroundColor: "lightslategrey",
    border: "2px single  #998877",
    borderRadius: "5px",
  },
});

export default function Form(props) {
  const [formState, setFormState] = useState({
    name: "",
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
      <div className={classes.outerCont}>
        <label htmlFor="name" className={classes.label}>
          <span className={classes.span}>What is your name?</span>
        </label>
        <input
          id="name"
          name="name"
          placeholder="Enter your name:"
          value={formState.name}
          onChange={inputChange}
          className={classes.input}
        />
      </div>
      <div className={classes.outerCont}>
        <label htmlFor="email" className={classes.label}>
          <span className={classes.span}>
            Please enter your email address now.
          </span>
        </label>
        <input
          id="email"
          name="email"
          placeholder="Enter your email address:"
          value={formState.email}
          onChange={inputChange}
          className={classes.input}
        />
      </div>
      <div className={classes.outerCont}>
        <label htmlFor="password" className={classes.label}>
          <span className={classes.span}>Create a password.</span>
        </label>
        <input
          id="password"
          name="password"
          placeholder="Create a password:"
          value={formState.name}
          onChange={inputChange}
          className={classes.input}
        />
      </div>
      <div className={classes.termsCont}>
        <label htmlFor="terms_of_service" className={classes.terms}>
          {`Do you agree to the\r\nTerms of Service?:`}
        </label>
        <input
          type="checkbox"
          id="terms_of_service"
          name="terms_of_service"
          value={formState.terms_of_service}
          onChange={inputChange}
        />
      </div>
      <div>
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
