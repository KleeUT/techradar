import React from "react";
import RadarNav from "./RadarNav";

export default ({ children }) => {
  return (
    <div>
      <RadarNav />
      {children}
    </div>
  );
};
