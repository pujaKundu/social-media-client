import React, { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await loginCall({
        email: email.current.value,
        password: password.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log(user);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
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
        <button
          className="mt-2 text-indigo-900 border hover:shadow-lg border-indigo-300 rounded-full w-full p-1.5 mb-2"
          type="submit"
        >
          <span>
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
          </span>
        </button>

        <small className="text-slate-700">
          Forgot Password?
        </small>
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
