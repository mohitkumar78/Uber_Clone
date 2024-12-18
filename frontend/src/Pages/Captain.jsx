import React from "react";
import { Link } from "react-router-dom";

function Captain() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-screen-xl p-8 text-black rounded-lg shadow-xl bg-gradient-to-r from-black to-gray-900">
        {/* Title and Description */}
        <div className="mb-8 text-center text-white">
          <h1 className="text-5xl font-extrabold">
            Welcome to Captain Services
          </h1>
          <p className="mt-4 text-lg font-medium text-gray-300">
            Join us to connect destinations and create stories. Whether you're
            already part of the journey or ready to start, we have the tools you
            need.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <Link to="/captain/capatinlogin">
            <button className="w-full px-8 py-3 text-lg font-semibold text-black transition-all duration-300 bg-white rounded-lg shadow-lg md:w-auto hover:bg-gray-200">
              Login as Captain
            </button>
          </Link>
          <Link to="/captain/captainsignup">
            <button className="w-full px-8 py-3 text-lg font-semibold text-white transition-all duration-300 bg-gray-800 rounded-lg shadow-lg md:w-auto hover:bg-white hover:text-gray-800">
              Sign Up as Captain
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Captain;
