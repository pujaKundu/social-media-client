import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post(
          "https://socialnetworkingsitebackend.onrender.com/api/auth/register",
          user
        );
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div
      className="flex flex-col bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-200 items-center justify-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <h1 className="text-indigo-200 text-4xl font-semibold mb-5">CircleUp</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center p-5 rounded form-wrapper relative"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
          padding: "40px",
        }}
      >
        <input
          className="bg-transparent p-2 text-slate-700 border-b mb-4 border-indigo-300"
          type="text"
          maxLength="20"
          placeholder="Username"
          ref={username}
          required
        />
        <input
          className="bg-transparent p-2 text-slate-700 border-b mb-4 border-indigo-300"
          type="email"
          placeholder="Email"
          ref={email}
          required
        />
        <input
          className="bg-transparent p-2 text-slate-700mb-2 border-b border-indigo-300 text-slate-700"
          type="password"
          minLength="6"
          ref={password}
          placeholder="Password"
          required
        />
        <input
          className="bg-transparent p-2 text-slate-700mb-2 border-b border-indigo-300 text-slate-700"
          type="password"
          minLength="6"
          ref={confirmPassword}
          placeholder="Confirm Password"
          required
        />
        <button
          className="mt-2 text-indigo-900 border hover:shadow-lg border-indigo-300 rounded-full w-full p-1.5 mb-2"
          type="submit"
        >
          Sign Up
          {/* <span>
            {isFetching ? (
              <ClipLoader
                color="fushia"
                loading="true"
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Login"
            )}
          </span> */}
        </button>

        <small className="text-slate-700">Already have an account?</small>

        <button
          className="mt-2 text-indigo-900 border hover:shadow-lg border-indigo-300 rounded-full w-full p-1.5"
          type="submit"
        >
          <Link to="/login"> Log in</Link>
        </button>
      </form>
    </div>
  );
};

export default Registration;
