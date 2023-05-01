import React from "react";
import LeftNav from "../../Shared/LeftNav/LeftNav";
import RightNav from "../../Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div className="container max-w-7xl mx-auto md:grid md:grid-cols-12 my-10 gap-8 p-4">
      <LeftNav />
      <div className="col-span-6 py-4">
        <h2 className="text-2xl font-bold text-gray-600 mb-5">News Portal</h2>
        <Outlet />
      </div>
      <RightNav />
    </div>
  );
};

export default Container;
