import React from "react";
import { FormInput } from "../FormInput/Form.input";
import { useState } from "react";
import "./SignUp.scss";
import { CustomButton } from "../CustomButton/CustomButton";

import { auth } from "../../firebase/firebase";



export const SignUp = () => {
  const [loginUser, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleHange(e) {
    const { name, value } = e.target;
    setUser((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    
  }

const handleSubmit = async (e) => {
  e.preventDefault();

  const {email, password} = loginUser;
  const {user} =  auth.createUserWithEmailAndPassword(
    email,
    password
  );
 
}

 
  return (
    <div className="sign-up">
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h1 className="title">Sign up</h1>

      <FormInput
        name="displayName"
        type="text"
        onChange={handleHange}
        label="display name"
        value={loginUser.displayName}
        required
      />

      <FormInput
        name="email"
        type="email"
        onChange={handleHange}
        label="password"
        value={loginUser.email}
        required
      />

      <FormInput
        name="password"
        type="password"
        onChange={handleHange}
        label="password"
        value={loginUser.password}
        required
      />

      <FormInput
        name="confirmPassword"
        type="password"
        onChange={handleHange}
        label="confirm password"
        value={loginUser.confirmPassword}
        required
      />
      <CustomButton type='submit' >Sign In</CustomButton>
    </form>
    
    </div>
  );
};
