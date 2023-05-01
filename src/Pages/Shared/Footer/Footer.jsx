import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-5">
      <div className="container mx-auto p-5 text-center text-gray-300">
        <ul className="flex justify-center gap-5 my-3">
          <li className="group">
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-white mt-[2px]"></span>
          </li>
          <li className="group">
            About{" "}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-white mt-[2px]"></span>
          </li>
          <li className="group">
            Career{" "}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-white mt-[2px]"></span>
          </li>
          <li className="group">
            Contact{" "}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-white mt-[2px]"></span>
          </li>
        </ul>
        <div className="max-w-7xl mx-auto my-5">
          <hr />
        </div>
        <p> &copy;Wixden 2023 </p>
      </div>
    </footer>
  );
};

export default Footer;
