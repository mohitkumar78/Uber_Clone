import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/UserSignup");
  };

  return (
    <div className="flex flex-col-reverse items-center min-h-screen gap-24 p-6 md:flex-row md:p-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Image Section */}
      <div className="flex justify-center mt-10 md:mt-0">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png"
          alt="Uber Illustration"
          className="h-auto max-w-full transition-all duration-500 transform hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="space-y-6 text-center md:text-left">
        <div>
          <button className="flex items-center h-20 gap-2 px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 transform rounded-lg shadow-md bg-gradient-to-r from-green-500 to-blue-500 hover:scale-110 hover:shadow-lg">
            <span>Continue as Captain</span>
            <img
              src="https://static.thenounproject.com/png/251452-200.png"
              alt="Captain Icon"
              className="w-10 h-10"
            />
          </button>
        </div>
        <h1 className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl animate-fade-in">
          Drive when you want,
          <br /> make what you need
        </h1>
        <p className="mt-4 text-sm text-black-600 md:text-base">
          Make money on your schedule with deliveries or rides—or both.
          <br />
          You can use your own car or choose a rental through Uber.
        </p>
        <div className="flex flex-wrap items-center gap-6 mt-6">
          <button
            onClick={handleClick}
            className="px-8 py-4 font-semibold text-white transition-transform duration-500 transform rounded-md shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-110 hover:shadow-xl hover:from-indigo-600 hover:to-blue-600"
          >
            Get Started
          </button>

          <div className="text-lg text-gray-800 md:text-base">
            Already have an account?{" "}
            <Link
              to="/Userlogin"
              className="relative text-blue-600 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full text-white"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
