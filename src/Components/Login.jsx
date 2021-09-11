import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { login } from "../Api";
import { AuthContext } from "../App";
import Form from "./Form";

const Login = () => {
  const { isAuthenticated, setAuthentication } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    console.log(credentials);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await login(credentials);
    if (
      res.hasOwnProperty("access_token") &&
      res.hasOwnProperty("referesh_token")
    ) {
      setAuthentication(true);
      localStorage.setItem("access_token", res.access_token);
      localStorage.setItem("refresh_token", res.refresh_token);
    }
  };
  if (isAuthenticated)
    return <Redirect to={{ pathname: "/Components/Welcome" }} />;
  console.log(handleChange);
  return (
    <div>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        credentials={credentials}
      ></Form>
    </div>
  );
};

export default Login;
