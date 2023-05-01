import { Avatar, Dropdown } from "flowbite-react";
import { Navbar } from "flowbite-react";
import React from "react";

const DragonNav = () => {
  return (
    <div className="my-5">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/"></Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={true}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-lg font-medium" href="#" active={true}>
            Asia
          </Navbar.Link>
          <Navbar.Link className="text-lg font-medium" href="#">
            Global
          </Navbar.Link>
          <Navbar.Link className="text-lg font-medium" href="#">
            Hot Topic
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