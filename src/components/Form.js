import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import * as yup from "yup";
import axios from "axios";

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
  },
  rowTerms: {
    width: "100%",
    marginBottom: "30px",
    marginTop: "40px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  termsLabel: {
    width: "55%",
    fontSize: "22px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  termsInput: {
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  finePrint: {
    fontSize: "5px",
  },
  submit: {
    marginTop: "20px",
    width: "28%",
    height: "32px",
    backgroundColor: "lightslategrey",
    border: "2px single  #998877",
    borderRadius: "5px",
  },
  error: {
    color: "red",
    fontSize: "14px",
    margin: "0",
    padding: "0",
  },
});

const formSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required(),
  email: yup.string().email().required("You'll need an email"),
  password: yup.string().required("Password neccessary"),
  terms: yup.boolean("Agree.").oneOf([true], "Agree."),
});

export default function Form(props) {
  const [formState, setFormState] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
  ]);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: "",
  });

  const [users, setUsers] = useState([]);
  //console.log("user state:", users);

  const classes = useStyles();
  const submit = (newUser) => setUsers([...formState, newUser]);
  const formSubmit = (ev) => {
    ev.preventDefault();
    console.log("Form submitted!");

    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        console.log(res.data);
        let resData = res.data;
        console.log("resData value:", resData);
        console.log("before:", users);
        submit(formState);
        console.log("after", users);
      })
      .catch((err) => {
        console.log(err);
      });

    setFormState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    });
  };

  const validate = (ev) => {
    yup
      .reach(formSchema, ev.target.name)
      .validate(ev.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [ev.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrors({
          ...errors,
          [ev.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (ev) => {
    ev.persist();
    validate(ev);

    let value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setFormState({ ...formState, [ev.target.name]: value });
    console.log("input changed!", ev.target.value, ev.target.checked);
  };
  return (
    <form autoComplete="off" className={classes.root} onSubmit={formSubmit}>
      <div className={classes.column}>
        <label htmlFor="firstName" className={classes.label}>
          <span className={classes.span}>What is your first name?</span>
        </label>
        <input
          id="firstName"
          name="firstName"
          placeholder="Enter your first name:"
          value={formState.firstName}
          onChange={inputChange}
          className={classes.input}
        />
        {errors.firstName.length > 0 ? (
          <p className={classes.error}>{errors.firstName}</p>
        ) : null}
      </div>
      <div className={classes.column}>
        <label htmlFor="lastName" className={classes.label}>
          <span className={classes.span}>What is your name?</span>
        </label>
        <input
          id="lastName"
          name="lastName"
          placeholder="Enter your last name:"
          value={formState.lastName}
          onChange={inputChange}
          className={classes.input}
        />
        {errors.lastName.length > 0 ? (
          <p className={classes.error}>{errors.lastName}</p>
        ) : null}
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
        {errors.email.length > 0 ? (
          <p className={classes.error}>{errors.email}</p>
        ) : null}
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
          value={formState.password}
          onChange={inputChange}
          className={classes.input}
        />
        {errors.password.length > 0 ? (
          <p className={classes.error}>{errors.password}</p>
        ) : null}
      </div>
      <div className={classes.rowTerms}>
        <label htmlFor="terms" className={classes.termsLabel}>
          {"Do you agree to the"}
          <br />
          {"Terms of Service?"}
          <br />
          <p className={classes.finePrint}>
            {
              "*Terms of Service Currently unavailable for reading. We apologize for the inconvenience."
            }
          </p>
        </label>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formState.terms}
          onChange={inputChange}
          className={classes.termsInput}
        />
        {/* {errors.terms.length > 0 ? (
          <p className={classes.error}>{errors.terms}</p>
        ) : null} */}
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
