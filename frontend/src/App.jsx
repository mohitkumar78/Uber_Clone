import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Start from "./Pages/Start";
import UserSignup from "./Pages/UserSignup";
import Userlogin from "./Pages/Userlogin";
import CapatinLogin from "./Pages/CapatinLogin";
import CaptainSignup from "./Pages/CaptainSignup";
import Captain from "./Pages/Captain";
import Home from "./Component/Home";
import "./App.css";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/home",
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
    path: "/captain",
    element: <Captain />,
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
