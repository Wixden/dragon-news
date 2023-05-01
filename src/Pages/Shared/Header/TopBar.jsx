import React, { useContext } from "react";
import logo from "../../../assets/images/logo.png";
import moment from "moment/moment";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="container mx-auto p-5 lg:p-0">
      <div className="text-center space-y-3 md:space-y-5 py-10">
        {/* Logo */}
        <Link to="/">
          <img className="mx-auto" src={logo} alt="Dragon News Logo" />
        </Link>
        <p>
          <span className="text-gray-400 font-medium">
            Journalism Without Fear or Favour
          </span>
        </p>
        <p className="font-medium text-lg">
          <span className="text-gray-500">
            {moment().format("dddd, MMMM D, YYYY")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TopBar;
