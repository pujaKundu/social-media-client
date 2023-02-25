import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Registration, Profile } from "./pages/index";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";

function Root() {
  const { user } = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <React.Fragment>{user ? <App /> : <Login />}</React.Fragment>,
    },
    {
      path: "/login",
      element: <React.Fragment>{user ? <App /> : <Login />}</React.Fragment>,
    },
    {
      path: "/registration",
      element: (
        <React.Fragment>{user ? <App /> : <Registration />}</React.Fragment>
      ),
    },
    {
      path: "/profile/:username",
      element: <Profile />,
    },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <Root />
  </AuthContextProvider>
);
