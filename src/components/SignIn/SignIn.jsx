import React from "react";
import { FormInput } from "../FormInput/Form.input";
import { useState } from "react";
import { auth } from '../../firebase/firebase'

import './SignIn.scss'
import { CustomButton } from "../CustomButton/CustomButton";

export const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  function handleHange(e) {
    const { name, value } = e.target;
    setUser((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    console.log(user);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setUser({ email: '', password: '' })
      console.log('succes: ', user)
    }

    catch (err) {
      console.log(err);
    }

  }

  return (
    <div className="sign-in">
      <form className="sign-in-form" onSubmit={handleSubmit} >
        <h1 className="title">
          Sign in with email and password
        </h1>

        <FormInput
          name="email"
          type="email"
          onChange={handleHange}
          label="email"
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
        <CustomButton type='submit' >Sign In</CustomButton>
      </form>
    </div>
  );
};
