import React, { useState } from "react";
import Button from "./Buttons/Button";
import { login } from "../Api";
import "./Form.css";

const Form = () => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [desc, setDesc] = useState(
    "Enter your credentials and Log in to your dashboard"
  );
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const data = {
    username: enteredUserName,
    password: enteredPassword,
  };
  const hanldeLogin = async (e) => {
    e.preventDefault();
    login(data).then((dataRe) => {
      console.log(dataRe);
      setDesc(`Welcome ${dataRe.user.username} (${dataRe.user.email})`);
    }).catch((err)=>{
      setDesc(`${err}`);
    })
  };
  return (
    <div className="form-container">
      <p className="description">{desc}</p>

      <form onSubmit={hanldeLogin}>
        <input
          className="input-field input-field__username"
          placeholder="username"
          type="text"
          autoComplete="username"
          value={enteredUserName}
          onChange={userNameHandler}
        ></input>
        <br />
        <input
          className="input-field input-field__password"
          placeholder="password"
          type="text"
          autoComplete="current-password"
          value={enteredPassword}
          onChange={passwordHandler}
        ></input>
        <br />
        <div className="checkbox-container">
          <input
            type="checkbox"
            value="RememberMe"
            className="checkbox"
          ></input>
          <span className="checkbox-text">Remember Me</span>
        </div>

        <br />
        <Button
          onClick={hanldeLogin}
          size="btn--ExtraLarge"
          variant="btn--login"
          label="Sign in"
        ></Button>
      </form>
    </div>
  );
};

export default Form;
