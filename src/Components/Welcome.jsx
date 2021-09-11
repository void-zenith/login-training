import React, { useContext } from "react";
import { AuthContext } from "../App";
import Button from "./Buttons/Button";

const Welcome = () => {
  const { setAuthentication } = useContext(AuthContext);

  const handleLogout = () => {
    setAuthentication(false);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };
  return (
    <div>
      <h2>Welcome</h2>
      <Button
        size="btn--ExtraLarge"
        variant="btn--login"
        label="Logout"
        onClick={handleLogout}
      />
    </div>
  );
};

export default Welcome;
