import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Userlogin() {
  const [input, setInput] = useState({
    email: "",
    Password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault(); // Corrected typo here
    try {
      const res = await axios.post(
        "http://localhost:4000/user/login",
        {
          email: input.email,
          Password: input.Password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 lg:flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Left Image Section */}
      <div className="flex justify-center w-full mb-8 lg:w-1/2 lg:mb-0">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg"
          alt="Login"
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
            Login Your Account
          </h2>
          <p className="text-sm text-center text-gray-500">
            Fill in the details below to start your journey.
          </p>

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
              name="email" // Added name attribute
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
              name="Password" // Ensure it matches the state key
              value={input.Password}
              onChange={inputHandler}
              placeholder="Enter Your Password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white transition duration-300 transform bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1"
          >
            Login
          </button>

          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/UserSignup"
              className="text-indigo-500 hover:underline hover:text-indigo-700"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Userlogin;
