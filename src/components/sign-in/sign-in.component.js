import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

function SignIn() {
  const [state, setState] = useState({ email: "", password: "" });

  function handleChange(event) {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
    // const value = event.target.value;
    // setState({ ...state, [event.target.name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
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
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;

//=======================================================
