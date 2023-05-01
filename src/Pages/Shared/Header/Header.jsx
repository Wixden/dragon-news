import React from "react";
import Marquee from "react-fast-marquee";
import DragonNav from "./Navbar";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <header className="container max-w-7xl mx-auto p-5 lg:p-0">
      <TopBar />
      <div className="bg-gray-200 p-5 rounded-md flex gap-10">
        <button className="bg-red-500 text-white text-lg font-semibold rounded px-8 py-3">
          Latest
        </button>
        <Marquee pauseOnHover={true} speed={50}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a
          voluptate reprehenderit quis. Adipisci, error veniam. Saepe quas quia
          iste?
        </Marquee>
      </div>
      <div>
        <DragonNav />
      </div>
    </header>
  );
};

export default Header;
