import { Avatar, Dropdown, ListGroup } from "flowbite-react";
import React, { useContext } from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiOutlineFacebook,
} from "react-icons/ai";
import QZone from "../QZone/QZone";
import bgApp from "../../../assets/images/bg.png";
import { AuthContext } from "../../../providers/AuthProvider";

const RightNav = () => {
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <div className="col-span-3 py-4">
      {user ? null : (
        <div>
          <h2 className="text-2xl font-bold text-gray-600 mb-5">Login With</h2>
          <button className="flex items-center justify-center gap-4 border-2 border-gray-300 rounded py-2 text-lg w-full my-3 hover:text-blue-500 hover:border-blue-500 duration-200">
            <BsGoogle />
            <p className="font-semibold">Login With Google</p>
          </button>
          <button className="flex items-center justify-center gap-4 border-2 border-gray-300 rounded py-2 text-lg w-full my-3 hover:text-blue-500 hover:border-blue-500 duration-200">
            <BsGithub />
            <p className="font-semibold">Login With GitHub</p>
          </button>
        </div>
      )}
      <div className={user ? "my-0" : "my-10"}>
        <ListGroup className="text-[17px] space-y-4 items-center">
          <ListGroup.Item>
            <h2 className="text-2xl font-bold text-gray-600 mb-2">
              Follow Us On
            </h2>
          </ListGroup.Item>
          <ListGroup.Item icon={AiOutlineFacebook}>Facebook</ListGroup.Item>
          <ListGroup.Item icon={AiFillTwitterCircle}>Twitter</ListGroup.Item>
          <ListGroup.Item icon={AiOutlineInstagram}>Download</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div className="my-10">
        <p className="absolute text-yellow-300">Hello World</p>
        <img
          src={bgApp}
          alt=""
          className="object-cover w-full rounded-md relative"
        />
      </div>
    </div>
  );
};

export default RightNav;
