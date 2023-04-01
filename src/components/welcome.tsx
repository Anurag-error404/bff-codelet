import React from "react";
import ph from "../assets/progressivehuman.png";
const welcome = () => {
  return (
    <div className="welcome-back">
      <div className="welcome-header">
        <h2>Welcome back, Ayo</h2> <br />
        <p>
          You've learned 70% of your goal this week! Keep it up and improve your
          progress.
        </p>
      </div>

      <img src={ph} alt="Your Image Description" />
    </div>
  );
};

export default welcome;
