import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import UserSignup from "./Pages/UserSignup";
import Userlogin from "./Pages/Userlogin";
import CapatinLogin from "./Pages/CapatinLogin";
import CaptainSignup from "./Pages/CaptainSignup";
import "./App.css";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/UserSignup",
    element: <UserSignup />,
  },
  {
    path: "/Userlogin",
    element: <Userlogin />,
  },
  {
    path: "/captain/capatinlogin",
    element: <CapatinLogin />,
  },
  {
    path: "/captain/captainsignup",
    element: <CaptainSignup />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
