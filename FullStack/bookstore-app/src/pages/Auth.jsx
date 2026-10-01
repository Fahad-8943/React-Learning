import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Auth({ register }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-[url('./assets/background.jpg')]">
      <div className="p-10">
        {/* Logo / Title */}
        <h1 className="text-center text-4xl font-bold text-white">
          Book Store
        </h1>

        {/* Auth Card */}
        <div className="mx-auto mt-10 w-full max-w-md rounded-lg bg-black/80 p-8 text-white">
          {/* User Icon */}
          <div className="flex justify-center">
            <FontAwesomeIcon
              icon={faUser}
              className="rounded-full border-2 border-white p-4 text-4xl"
            />
          </div>
          {/* Heading */}
          <h2 className="mt-6 text-center text-3xl font-bold">
            {register ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="mt-2 text-center text-gray-300">
            {register ? "Register to continue" : "Login to your account"}
          </p>
          {/* Form */}
          <form className="mt-8">
            {/* Name - Register Only */}
            {register && (
              <div className="mb-4">
                <label className="mb-2 block">Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-gray-500 bg-white p-3 text-black outline-none focus:border-blue-500"
                />
              </div>
            )}

            {/* Email */}
            <div className="mb-4">
              <label className="mb-2 block">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-500 bg-white p-3 text-black outline-none focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="mb-2 block">Password</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-gray-500 bg-white p-3 pr-12 text-black outline-none focus:border-blue-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>

            {/* Confirm Password - Register Only */}
            {register && (
              <div className="mb-4">
                <label className="mb-2 block">Confirm Password</label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="w-full rounded-md border border-gray-500 bg-white p-3 pr-12 text-black outline-none focus:border-blue-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                  >
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEyeSlash : faEye}
                    />
                  </button>
                </div>
              </div>
            )}

            {/* Warning - Register Only */}
            {register && (
              <p className="mt-2 text-center text-yellow-500">
                * Never share your password with others
              </p>
            )}

            {/* Forgot Password - Login Only */}
            {!register && (
              <div className="mb-4 text-right">
                <a href="#" className="text-sm text-blue-400 hover:underline">
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-blue-700 p-3 font-semibold hover:bg-blue-800"
            >
              {register ? "Register" : "Login"}
            </button>
          </form>
          {/* OR Divider */}{" "}
          <div className="my-6 flex items-center">
            {" "}
            <div className="h-px flex-1 bg-gray-500"></div>{" "}
            <span className="px-4 text-sm text-gray-400"> OR </span>{" "}
            <div className="h-px flex-1 bg-gray-500"></div>{" "}
          </div>{" "}
          {/* Google Button */}{" "}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-md bg-white p-3 font-semibold text-gray-800 hover:bg-gray-200"
          >
            {" "}
            <FontAwesomeIcon icon={faGoogle} className="text-lg" />{" "}
            {register ? "Register with Google" : "Login with Google"}{" "}
          </button>
          {/* Switch Login / Register */}
          <p className="mt-6 text-center text-gray-300">
            {register ? (
              <>
                Already have an account?{" "}
                <a href="/login" className="text-blue-400 hover:underline">
                  Login
                </a>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <a href="/signup" className="text-blue-400 hover:underline">
                  Register
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
