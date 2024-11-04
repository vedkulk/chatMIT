import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { loading, login } = useLogin();
  
	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg shadow-red-700/50 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100">
        <h1 className="text-4xl font-semibold text-center text-black">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black mt-7">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 text-black bg-white"
              value={username}
							onChange={(e) => setUsername(e.target.value)}
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
              value={password}
							onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to={'/signup'}
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-3 inline-block text-gray-600"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-5 bg-red-500 hover:bg-red-700 text-white border-none"disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
