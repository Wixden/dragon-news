import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="max-w-lg mx-auto my-10 rounded-md border p-10 shadow-md hover:shadow-2xl duration-500">
      <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
      <form className="flex flex-col gap-4 space-y-3">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <input
            className="w-full rounded py-3.5 px-5 border-0 outline outline-1 outline-gray-400 focus:outline-gray-700 focus:outline-0 bg-gray-100 text-sm"
            id="email2"
            type="email"
            name="email"
            placeholder="name@flowbite.com"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <input
            className="w-full rounded py-3.5 px-5 border-0 outline outline-1 outline-gray-400 focus:outline-gray-700 focus:outline-0 bg-gray-100 text-sm"
            id="password2"
            type="password"
            name="password"
            required={true}
            placeholder="******"
            shadow={true}
          />
        </div>
        <button className="rounded-md bg-gray-700 text-white text-lg w-full p-3 font-semibold">
          Login
        </button>
        <div className="mb-8 text-center mt-0">
          <p className="text-gray-500">
            New to Dragon News?{" "}
            <span className="text-black font-semibold">
              <Link to="/register">Register Now</Link>
            </span>{" "}
          </p>
          <div className="my-5 flex items-center gap-6">
            <span className="bg-gray-200 h-0.5 w-full"></span>
            <p>or</p>
            <span className="bg-gray-200 h-0.5 w-full"></span>
          </div>
          <div className="space-y-2">
            <button className="flex items-center justify-center gap-4 border-2 rounded-md border-gray-300 w-full p-3 font-medium">
              <FaGoogle className="text-xl" /> Continue With Google
            </button>
            <button className="flex items-center justify-center gap-4 border-2 rounded-md border-gray-300 w-full p-3 font-medium">
              <FaFacebook className="text-xl" /> Continue With Facebook
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
