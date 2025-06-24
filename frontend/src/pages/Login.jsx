import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import CanvasLogin from '../useful_components/CanvasLogin';
import CanvasLogin_snow from '../useful_components/CanvasLogin_snow';
// import CanvasLogin2 from '../useful_components/CanvasLogin2'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Account created successfully!');
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          if (rememberMe) {
            localStorage.setItem('token', response.data.token);
          }
          toast.success('Logged in successfully!');
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        {/* <CanvasLogin2 className="absolute inset-0 w-screen h-screen z-0" /> */}
        <div className="flex bg-gray-100 rounded-3xl drop-shadow-[8px_8px_0px_#000] overflow-hidden max-w-4xl w-full m-4 z-50">
          {/* Left side with canvas */}
          <div className=" md:block md:w-1/2 bg-gray-200 flex items-center justify-center canvas-container">
            <CanvasLogin />
          </div>
          
          {/* Right side with form */}
          <div className="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">
              {currentState === 'Login' ? 'Welcome back!' : 'Create account'}
            </h1>
            <p className="text-gray-600 mb-6">
              {currentState === 'Login' ? 'Please enter your details' : 'Sign up to get started'}
            </p>

            <form onSubmit={onSubmitHandler}>
              {currentState === 'Sign Up' && (
                <>
                  <label className="text-gray-700 text-sm mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
                    placeholder="Enter your name"
                    required
                  />
                </>
              )}

              <label className="text-gray-700 text-sm mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
                placeholder="Enter your email"
                required
              />

              <label className="text-gray-700 text-sm mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-500"
                placeholder="Enter your password"
                required
              />

              <div className="flex items-center justify-between mb-6">
                <div>
                  <input 
                    type="checkbox" 
                    id="remember" 
                    className="mr-2"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me for 30 days
                  </label>
                </div>
                <p className="text-sm text-gray-700 hover:underline cursor-pointer">
                  Forgot password?
                </p>
              </div>

              <button 
                type="submit" 
                className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 mb-4"
              >
                {currentState === 'Login' ? 'Log in' : 'Sign up'}
              </button>
            </form>

            <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-bold flex items-center justify-center">
              <img
                src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              {currentState === 'Login' ? 'Log in with Google' : 'Sign up with Google'}
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              {currentState === 'Login' ? "Don't have an account? " : "Already have an account? "}
              <span 
                onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
                className="text-black font-bold hover:underline cursor-pointer"
              >
                {currentState === 'Login' ? 'Sign Up' : 'Log in'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};


export default Login;