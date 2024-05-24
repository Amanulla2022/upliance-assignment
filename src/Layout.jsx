import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserData from "./pages/UserData";
import Counter from "./pages/Counter";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import { useSelector } from "react-redux";

// Layout page for routing
const Layout = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/user"
          element={isAuthenticated ? <UserData /> : <Navigate to="/" />}
        />
        <Route
          path="/counter"
          element={isAuthenticated ? <Counter /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default Layout;
