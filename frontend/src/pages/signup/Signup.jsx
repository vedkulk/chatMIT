import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg shadow-red-700/50 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100">
        <h1 className="text-4xl font-semibold text-center text-black">
          Sign Up
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black mt-7">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10 text-black bg-white"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black mt-2">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 text-black bg-white"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-black mt-2">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 text-black bg-white"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-black mt-2">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 text-black bg-white"
            />
          </div>
          <label className="label">
              <span className="text-base label-text text-black mt-2">Choose your gender</span>
            </label>
          <GenderCheckbox />

          <a
            className="text-sm hover:underline hover:text-blue-600 mt-5 inline-block text-gray-600"
            href="#"
          >
            Already have an account?
          </a>
          
          <div>
            <button className="btn btn-block btn-sm mt-3 bg-red-500 hover:bg-red-700 text-white border-none">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
