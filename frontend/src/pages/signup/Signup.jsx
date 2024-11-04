import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import useSignup from '../../hooks/useSignup.js'

const SignUp = () => {
  const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

  const {loading, signup} = useSignup()

  const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg shadow-red-700/50 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100">
        <h1 className="text-4xl font-semibold text-center text-black">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black mt-7">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10 text-black bg-white"
              value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
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
              value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
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
              autoComplete='password'
              value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
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
              autoComplete='password'
              value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>
          <label className="label">
              <span className="text-base label-text text-black mt-2">Choose your gender</span>
            </label>
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <Link
            to={'/login'}
            className="text-sm hover:underline hover:text-blue-600 mt-5 inline-block text-gray-600"
            href="#"
          >
            Already have an account?
          </Link>
          
          <div>
            <button className="btn btn-block btn-sm mt-3 bg-red-500 hover:bg-red-700 text-white border-none"disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
