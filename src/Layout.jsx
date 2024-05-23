import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserData from "./pages/UserData";
import Counter from "./pages/Counter";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";

// Layout page for routing
const Layout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<UserData />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
};

export default Layout;
