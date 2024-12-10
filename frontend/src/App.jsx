import react from "react";
import { Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserSignup from "./Pages/UserSignup";
import "./App.css";
import Userlogin from "./Pages/Userlogin";
import CapatinLogin from "./Pages/CapatinLogin";
import CaptainSignup from "./Pages/CaptainSignup";

function App() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/usersignup" element={<UserSignup />} />
      <Route path="/userlogin" element={<Userlogin />} />
      <Route path="/captainlogin" element={<CapatinLogin />} />
      <Route path="/captainsignup" element={<CaptainSignup />} />
    </Router>
  );
}

export default App;
