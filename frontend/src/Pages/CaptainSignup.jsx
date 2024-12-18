import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CaptainSignup() {
  const [input, setInput] = useState({
    fullname: { firstname: "", lastname: "" },
    email: "",
    password: "",
    vechile: {
      color: "",
      plate: "",
      capacity: "",
      vechileType: "car",
    },
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/captain/register",
        {
          fullname: {
            firstname: input.fullname.firstname,
            lastname: input.fullname.lastname,
          },
          email: input.email,
          password: input.password,
          vechile: input.vechile,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Signup Successful:", response);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const inputHandler = (e) => {
    const { id, value } = e.target;
    if (id === "firstname" || id === "lastname") {
      setInput((prev) => ({
        ...prev,
        fullname: { ...prev.fullname, [id]: value },
      }));
    } else if (id in input.vechile) {
      setInput((prev) => ({
        ...prev,
        vechile: { ...prev.vechile, [id]: value },
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
          <h1 className="mb-4 text-5xl font-extrabold">Become a Captain</h1>
          <p className="mb-6 text-lg">
            Sign up to become a captain and start earning by driving with us!
            Join our platform to make your journey smooth and rewarding.
          </p>
          <p className="mb-4 text-sm">
            We provide all the tools and support you need to succeed on the
            road.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="px-8 py-16 lg:w-1/2">
          <div className="p-10 rounded-lg shadow-2xl bg-gradient-to-r from-black to-gray-900">
            <h1 className="mb-6 text-4xl font-extrabold text-center text-white">
              Create Your Captain Account
            </h1>
            <p className="mb-10 text-lg text-center text-gray-300">
              Sign up to start your journey with us and drive for a cause!
            </p>

            <form className="space-y-6" onSubmit={submitHandler}>
              {/* Full Name Section */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
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
              </div>

              {/* Email Section */}
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

              {/* Password Section */}
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

              {/* Vehicle Details Section */}
              <h3 className="mt-6 mb-4 text-lg font-semibold text-white">
                Vehicle Details
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="color"
                    className="block text-sm font-medium text-white"
                  >
                    Vehicle Color
                  </label>
                  <input
                    type="text"
                    id="color"
                    value={input.vechile.color}
                    onChange={inputHandler}
                    placeholder="Enter vehicle color"
                    className="w-full p-4 mt-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="plate"
                    className="block text-sm font-medium text-white"
                  >
                    Plate Number
                  </label>
                  <input
                    type="text"
                    id="plate"
                    value={input.vechile.plate}
                    onChange={inputHandler}
                    placeholder="Enter vehicle plate number"
                    className="w-full p-4 mt-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="capacity"
                    className="block text-sm font-medium text-white"
                  >
                    Capacity
                  </label>
                  <input
                    type="number"
                    id="capacity"
                    value={input.vechile.capacity}
                    onChange={inputHandler}
                    placeholder="Enter vehicle capacity"
                    className="w-full p-4 mt-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="vechileType"
                    className="block text-sm font-medium text-white"
                  >
                    Vehicle Type
                  </label>
                  <select
                    id="vechileType"
                    value={input.vechile.vechileType}
                    onChange={inputHandler}
                    className="w-full p-4 mt-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <option value="car">Car</option>
                    <option value="motorcycle">Motorcycle</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 mt-6 font-semibold text-black transition-all duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-200"
              >
                Sign Up
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/captain/capatinlogin"
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

export default CaptainSignup;
