import React from "react";
import CanvasLogin from "./CanvasLogin";
import CanvasLogin2 from "./CanvasLogin2";
import CanvasLogin_snow from "./CanvasLogin_snow";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-full bg-gray-900 mb-0">
      <CanvasLogin_snow className="absolute inset-0 w-full h-full z-0" />
      <div className="flex bg-gray-100 rounded-lg overflow-hidden max-w-4xl shadow-lg w-full h-full z-50">
        <div className="w-1/2 bg-gray-200 flex items-center justify-center canvas-container">
          {/* <canvas ref={canvasRef} className="max-w-full"></canvas> */}
          <CanvasLogin />
        </div>
        <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Welcome back!
          </h1>
          <p className="text-gray-600 mb-6">Please enter your details</p>

          <label className="text-gray-700 text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
            placeholder="Enter your email"
          />

          <label className="text-gray-700 text-sm mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
            placeholder="Enter your password"
          />

          <div className="flex items-center justify-between mb-6">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me for 30 days
              </label>
            </div>
            <a href="#" className="text-sm text-gray-700 hover:underline">
              Forgot password?
            </a>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 mb-4">
            Log in
          </button>

          <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-bold flex items-center justify-center">
            <img
              src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Log in with Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-black font-bold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
