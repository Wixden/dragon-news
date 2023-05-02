import React from "react";
import { Outlet } from "react-router-dom";
import DragonNav from "../Pages/Shared/Header/Navbar";

const AuthenticateLayout = () => {
  return (
    <div>
      <DragonNav />
      <Outlet></Outlet>
    </div>
  );
};

export default AuthenticateLayout;
