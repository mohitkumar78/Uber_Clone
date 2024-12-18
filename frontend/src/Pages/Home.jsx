import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/UserSignup");
  };

  const naviagteToCaptain = () => {
    navigate("/captain");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-white bg-gradient-to-r from-black to-gray-900">
      {/* Header Section */}
      <div className="max-w-3xl text-center md:text-left">
        <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white">
          Welcome to the Journey
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-300">
          Whether you want to earn money as a Captain or find convenient rides
          as a User, we're here to make it happen. Your journey begins with
          us—drive when you want, ride when you need.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-6 md:flex-row">
          <button
            onClick={naviagteToCaptain}
            className="px-8 py-4 font-semibold text-black transition-transform duration-300 bg-white rounded-lg shadow-xl hover:scale-105 hover:bg-gray-200"
          >
            Continue as Captain
          </button>
          <button
            onClick={handleClick}
            className="px-8 py-4 font-semibold text-black transition-transform duration-300 bg-white rounded-lg shadow-xl hover:scale-105 hover:bg-gray-200"
          >
            Get Started as User
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full max-w-3xl mt-6 text-left text-gray-400">
        <p className="text-sm">
          Already have an account?{" "}
          <Link
            to="/Userlogin"
            className="text-white underline hover:text-gray-300"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
