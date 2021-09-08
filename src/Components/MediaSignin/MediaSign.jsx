import React from "react";
import "./MediaSign.css";
const MediaSign = () => {
  return (
    <div>
      <div className="flex-row flex-items_center">
        <div className="line line-start"></div>
        <div className="center">
          <p className="description">
            Or Sign in with <span className="bold-text">Social Media</span>
          </p>
        </div>
        <div className="line line-end"></div>
      </div>
      <div className="flex-row flex-content_center">
        <button className="btn-sign btn--google">Google</button>
        <button className="btn-sign btn--facebook">Facebook</button>
      </div>
    </div>
  );
};

export default MediaSign;
