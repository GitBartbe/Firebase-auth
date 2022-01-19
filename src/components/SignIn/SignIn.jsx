import React from "react";
import { FormInput } from "../FormInput/Form.input";
import { useState } from "react";

import './SignIn.scss'

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

  return (
    <div className="sign-in">
        <div className="sign-in-form" >
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
</div>
    </div>
  );
};
