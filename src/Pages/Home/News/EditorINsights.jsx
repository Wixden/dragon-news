import React from "react";
import first from "../../../assets/images/1.png";
import second from "../../../assets/images/2.png";
import third from "../../../assets/images/3.png";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment/moment";

const EditorINsights = (image) => {
  return (
    <div className="my-16">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-10 md:space-y-0">
        <div className="shadow-md p-5 rounded-md">
          <img src={first} alt="" />
          <h4 className="my-4 text-base font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            exercitationem.
          </h4>
          <div className="flex gap-3 items-center text-gray-500">
            <FaCalendarAlt />
            {moment().format("dddd, MMMM do, YYYY")}
          </div>
        </div>
        <div className="shadow-md p-5 rounded-md">
          <img src={second} alt="" />
          <h4 className="my-4 text-base font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            exercitationem.
          </h4>
          <div className="flex gap-3 items-center text-gray-500">
            <FaCalendarAlt />
            {moment().format("dddd, MMMM do, YYYY")}
          </div>
        </div>
        <div className="shadow-md p-5 rounded-md">
          <img src={third} alt="" />
          <h4 className="my-4 text-base font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            exercitationem.
          </h4>
          <div className="flex gap-3 items-center text-gray-500">
            <FaCalendarAlt />
            {moment().format("dddd, MMMM do, YYYY")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorINsights;
