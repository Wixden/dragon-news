import React from "react";
import { Footer } from "flowbite-react";
import { Outlet } from "react-router-dom";
import RightNav from "../Pages/Shared/RightNav/RightNav";
import TopBar from "../Pages/Shared/Header/TopBar";

const NewsLayout = () => {
  return (
    <div>
      <TopBar />
      <div className="container mx-auto md:grid md:grid-cols-12 my-10 gap-8">
        <div className="col-span-9 py-4">
          <h2 className="text-2xl font-bold text-gray-600 mb-5">News Portal</h2>

          <Outlet />
        </div>
        <RightNav />
      </div>
      <Footer />
    </div>
  );
};

export default NewsLayout;
