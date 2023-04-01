import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import AddBuddies from "./pages/AddBuddies";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SheetsnCourses from "./pages/SheetsnCourses";
import Web3Login from "./pages/Web3Login";

function App() {
  // const location = useLocation();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/web3login" element={<Web3Login />} />
          <Route path="/addbuddies" element={<AddBuddies />} />
          <Route path="/sheetsncourses" element={<SheetsnCourses />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
