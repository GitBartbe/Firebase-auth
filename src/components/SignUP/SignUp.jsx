import React from "react";
import { FormInput } from "../FormInput/Form.input";
import { useState } from "react";
import "./SignUp.scss";
import { CustomButton } from "../CustomButton/CustomButton";

export const SignUp = () => {
  const [user, setUser] = useState({
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
    console.log(user);
  }
  return (
    <div className="sign-up">
    <div className="sign-up-form">
      <h1 className="title">Sign up</h1>

      <FormInput
        name="displayName"
        type="text"
        onChange={handleHange}
        label="display name"
        value={user.displayName}
        required
      />

      <FormInput
        name="email"
        type="email"
        onChange={handleHange}
        label="password"
        value={user.email}
        required
      />

      <FormInput
        name="password"
        type="password"
        onChange={handleHange}
        label="password"
        value={user.password}
        required
      />

      <FormInput
        name="confirmPassword"
        type="password"
        onChange={handleHange}
        label="confirm password"
        value={user.confirmPassword}
        required
      />
      <CustomButton>Sign In</CustomButton>
    </div>
    
    </div>
  );
};
