import React from "react";
import swimmingPool from "../../../assets/images/qZone1.png";
import classRoom from "../../../assets/images/qZone2.png";
import playGround from "../../../assets/images/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-gray-100 rounded-md p-5 my-5">
      <h2 className="text-2xl font-bold text-gray-600 mb-5">Q-Zone</h2>
      <div>
        <img src={swimmingPool} alt="" />
        <img src={classRoom} alt="" />
        <img src={playGround} alt="" />
      </div>
    </div>
  );
};

export default QZone;
