import React from "react";
import "./Button.css";
const Button = ({ size, variant, label  }) => {
  return (
    <div className="flex">
      <button
        className={`btn ${size} ${variant}`}
        data-testid="button"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
