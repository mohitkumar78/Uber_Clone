import React, { useState } from "react";
import axios from "axios";

function CaptainLogin() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/captain/login",
        {
          email: input.email,
          password: input.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login Successful:", response.data);
      alert("Login Successful!");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(
        error.response?.data?.message || "Something went wrong during login."
      );
    }
  };

  const inputHandler = (e) => {
    const { id, value } = e.target;
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col w-full max-w-screen-xl lg:flex-row">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center px-8 py-16 text-white lg:w-1/2">
          <h1 className="mb-4 text-5xl font-extrabold">
            Welcome Back, Captain!
          </h1>
          <p className="mb-6 text-lg">
            Log in to access your dashboard and manage your missions. Take
            charge of your fleet with advanced tools and resources tailored for
            leaders like you.
          </p>
          <p className="mt-6 text-sm italic opacity-80">
            "Success is not the position you hold, but the steps you take to get
            there."
          </p>
        </div>

        {/* Right Section */}
        <form
          className="flex flex-col justify-center px-8 py-16 rounded-lg shadow-2xl lg:w-1/2 bg-gradient-to-r from-black to-gray-900"
          onSubmit={submitHandler}
        >
          <h2 className="mb-6 text-4xl font-extrabold text-center text-white">
            Captain Login
          </h2>

          <div className="space-y-6">
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
                value={input.password}
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default CaptainLogin;
