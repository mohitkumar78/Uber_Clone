import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Userlogin() {
  const [input, setInput] = useState({
    email: "",
    Password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
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

  // Animation

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col w-full max-w-screen-xl lg:flex-row">
        {/* Left Text Section */}
        <div className="flex flex-col items-start justify-center px-8 py-16 text-white lg:w-1/2">
          <h1 className="mb-4 text-5xl font-extrabold">
            Welcome to Our Platform
          </h1>
          <p className="mb-6 text-lg">
            Login to access your personalized dashboard and stay connected with
            the latest features. If you're new, feel free to sign up and become
            part of our growing community!
          </p>
          <p className="mb-4 text-sm">
            We provide a seamless experience with a sleek interface and powerful
            tools. Our mission is to deliver the best service with cutting-edge
            technology.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="px-8 py-16 lg:w-1/2">
          <div className="p-10 rounded-lg shadow-2xl bg-gradient-to-r from-black to-gray-900">
            <h1 className="mb-6 text-4xl font-extrabold text-center text-white">
              Welcome Back!
            </h1>
            <p className="mb-10 text-lg text-center text-gray-300">
              Login to your account to continue your journey with us.
            </p>

            <form className="space-y-6" onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={inputHandler}
                  placeholder="Enter your email"
                  className="w-full p-4 mt-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="Password"
                  value={input.Password}
                  onChange={inputHandler}
                  placeholder="Enter your password"
                  className="w-full p-4 mt-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-4 font-semibold text-black transition-all duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-200"
              >
                Login
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/UserSignup"
                  className="font-semibold text-white hover:underline"
                >
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userlogin;
