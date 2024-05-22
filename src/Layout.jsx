import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserData from "./pages/UserData";
import Counter from "./pages/Counter";

// Layout page for routing
const Layout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserData />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
};

export default Layout;
