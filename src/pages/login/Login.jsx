import React from "react";

const Login = () => {
  return (
    <div
      className="flex flex-col bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-200 items-center justify-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <h1 className="text-indigo-200 text-4xl font-semibold mb-5">CircleUp</h1>
      <form
        action=""
        className="flex flex-col justify-center items-center p-5 rounded form-wrapper relative"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
          padding: "40px",
        }}
      >
        <input
          className="bg-transparent p-2 text-slate-700 border-b mb-4 border-indigo-300"
          type="email"
          placeholder="Email"
        />
        <input
          className="bg-transparent p-2 text-slate-700mb-2 border-b border-indigo-300"
          type="password"
          name=""
          id=""
          placeholder="Password"
        />
        <button
          className="mt-2 text-indigo-900 border hover:shadow-lg border-indigo-300 rounded-full w-full p-1.5 mb-2"
          type="submit"
        >
          Login
        </button>
        <small className="text-purple-800 ">Forgot Password?</small>
        <button
          className="mt-2 text-indigo-900 border hover:shadow-lg border-indigo-300 rounded-full w-full p-1.5"
          type="submit"
        >
          Create new account
        </button>
      </form>
    </div>
  );
};

export default Login;
