import { Avatar, Dropdown } from "flowbite-react";
import { Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const DragonNav = () => {
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <div className="my-5">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/"></Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <Dropdown
              arrowIcon={true}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img={user?.photoURL}
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/login">
              <button className="py-2 px-7 rounded-md font-medium border-2 border-gray-300 duration-300 hover:bg-black hover:text-white">
                Login
              </button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-lg font-medium" href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link className="text-lg font-medium" href="#">
            About
          </Navbar.Link>
          <Navbar.Link className="text-lg font-medium" href="#">
            Career
          </Navbar.Link>
          <Navbar.Link className="text-lg font-medium" href="#">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default DragonNav;
