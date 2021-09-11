import React from "react";
import Button from "./Buttons/Button";
import "./Form.css";
import MediaSign from "./MediaSignin/MediaSign";

const Form = ({ handleChange, hanldeSubmit, credentials }) => {
  console.log(`${hanldeSubmit},${hanldeSubmit},${credentials}`);
  return (
    <div className="form-container">
      <p className="description">
        Enter your credentials and Log in to your dashboard
      </p>
      <form>
        <input
          className="input-field input-field__username"
          placeholder="username"
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        ></input>
        <br />
        <input
          className="input-field input-field__password"
          placeholder="password"
          type="text"
          name="password"
          value={credentials.password}
          onChange={handleChange}
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
          size="btn--ExtraLarge"
          variant="btn--login"
          label="Sign in"
          onClick={hanldeSubmit}
        ></Button>
      </form>
      <p className="description">
        Don't have an account?{" "}
        <a className="link" href="www">
          Create your account
        </a>
      </p>
      <MediaSign></MediaSign>
    </div>
  );
};

export default Form;
