import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UserSignup() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullname: { firstname: "", lastname: "" },
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
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
      if (response) {
        navigate("/Userlogin");
      }
      console.log("Signup Successful:", response);
    } catch (error) {
      console.error("Error during signup:", error);
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
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col w-full max-w-screen-xl lg:flex-row">
        {/* Left Text Section */}
        <div className="flex flex-col items-start justify-center px-8 py-16 text-white lg:w-1/2">
          <h1 className="mb-4 text-5xl font-extrabold">Join Our Community</h1>
          <p className="mb-6 text-lg">
            Sign up to access your personalized dashboard and explore all our
            features. Join us and make your journey seamless!
          </p>
          <p className="mb-4 text-sm">
            Experience a platform designed with the latest technology to make
            your interaction easy, fast, and intuitive.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="px-8 py-16 lg:w-1/2">
          <div className="p-10 rounded-lg shadow-2xl bg-gradient-to-r from-black to-gray-900">
            <h1 className="mb-6 text-4xl font-extrabold text-center text-white">
              Create Your Account
            </h1>
            <p className="mb-10 text-lg text-center text-gray-300">
              Sign up to start your journey with us and enjoy all the amazing
              features.
            </p>

            <form className="space-y-6" onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor="first"
                  className="block text-sm font-medium text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first"
                  value={input.fullname.firstname}
                  onChange={inputHandler}
                  placeholder="Enter your first name"
                  className="w-full p-4 mt-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  value={input.fullname.lastname}
                  onChange={inputHandler}
                  placeholder="Enter your last name"
                  className="w-full p-4 mt-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

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
                Sign Up
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/Userlogin"
                  className="font-semibold text-white hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
