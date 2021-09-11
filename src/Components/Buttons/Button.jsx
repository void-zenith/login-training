import React from "react";
import "./Button.css";
const Button = ({ size, onClick,variant, label }) => {
  return (
    <button className={`btn ${size} ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
