import React from "react";
import "../styles/gradient.css";

const GradientBackground = () => {
  return (
    <div className="fixed -z-10 h-full w-full overflow-hidden">
      <div className="gradient"></div>
    </div>
  );
};

export default GradientBackground;
