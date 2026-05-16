import React from "react";
import LeftSide from "./left/LeftSide";
import RightSide from "./right/RightSide";


const Section1: React.FC = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,white_0%,white_15%,transparent_35%),linear-gradient(to_bottom,#9175e4,white)] flex">
      {/* Left Half */}
       <LeftSide/>
      {/* Right Half */}
     
    <RightSide/>
    </div>
  );
};

export default Section1;
