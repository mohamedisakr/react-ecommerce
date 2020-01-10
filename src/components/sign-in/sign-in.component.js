import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

function SignIn() {
  const [state, setState] = useState({ email: "", password: "" });

  function handleChange(event) {
    // const { value, name } = event.target;
    // setState({ ...state, [name]: value });
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setState({ email: "", password: "" });
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={state.email}
          required
          label="EMail"
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={state.password}
          required
          label="Password"
          handleChange={handleChange}
        />
        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </div>
  );
}

export default SignIn;

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
// make event.target.name property

//   function handleChange(event) {
//     // const { value, name } = event.target;
//     // this.setState({[name] : value});
//     let value = event.target.value;
//     setName(value);
//   }

/*
  function handleSubmit(event) {
    event.preventDefault();
    setEmail("");
    setPassword("");
  }

  function handleEmailChange(event) {
    event.target.name = event.target.value;
  }

  function handlePasswordChange(event) {
    event.target.name = event.target.value;
  }
  */
