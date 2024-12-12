import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function UserSignup() {
  const [input, setInput] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("User Details:", input);

    try {
      const response = await axios.post(
        "http://localhost:4000/user/register",
        {
          fullname: {
            firstname: input.fullname.firstname,
            lastname: input.fullname.lastname,
          },
          email: input.email,
          Password: input.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Signup Successful:", response);
    } catch (error) {
      console.error("Error occurred during signup:", error.message);
    }
  };

  const inputHandler = (e) => {
    const { id, value } = e.target;
    if (id === "first") {
      setInput((prev) => ({
        ...prev,
        fullname: { ...prev.fullname, firstname: value },
      }));
    } else if (id === "lastname") {
      setInput((prev) => ({
        ...prev,
        fullname: { ...prev.fullname, lastname: value },
      }));
    } else {
      setInput((prev) => ({ ...prev, [id]: value }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 lg:flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Left Image Section */}
      <div className="flex justify-center w-full mb-8 lg:w-1/2 lg:mb-0">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png"
          alt="Sign Up"
          className="max-w-md transition-transform duration-300 rounded-lg shadow-xl hover:scale-105"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex justify-center w-full lg:w-1/2">
        <form
          className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl"
          onSubmit={submitHandler}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Create Your Account
          </h2>
          <p className="text-sm text-center text-gray-500">
            Fill in the details below to start your journey.
          </p>

          <div>
            <label
              htmlFor="first"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="first"
              value={input.fullname.firstname}
              onChange={inputHandler}
              placeholder="Enter Your First Name"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              value={input.fullname.lastname}
              onChange={inputHandler}
              placeholder="Enter Your Last Name"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={input.email}
              onChange={inputHandler}
              placeholder="Enter Your Email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={input.password}
              onChange={inputHandler}
              placeholder="Enter Your Password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white transition duration-300 transform bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/Userlogin"
              className="text-indigo-500 hover:underline hover:text-indigo-700"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default UserSignup;
