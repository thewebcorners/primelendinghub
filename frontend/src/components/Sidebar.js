import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { handleSuccess } from "../utils";
import { FaTachometerAlt, FaUser, FaMoneyCheck, FaSignOutAlt } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { SiLinuxprofessionalinstitute } from "react-icons/si";

import "./Sidebar.css";

const Sidebar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []); // Empty dependency array, so this runs only once when the component mounts

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setIsAuthenticated(false);  // Ensure state change does not trigger further re-renders
    handleSuccess("User Logged out");
     navigate("/login");
    
  };

  if (isAuthenticated) {
    return (
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <nav className="nav-links">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "sidebar-item active-link" : "sidebar-item")}
          >
            <FaTachometerAlt /> <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/leads"
            className={({ isActive }) => (isActive ? "sidebar-item active-link" : "sidebar-item")}
          >
            <SiGoogleads /> <span>Leads</span>
          </NavLink> 
          <NavLink
            to="/loans"
            className={({ isActive }) => (isActive ? "sidebar-item active-link" : "sidebar-item")}
          >
            <FaMoneyCheck /> <span>Loans</span>
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "sidebar-item active-link" : "sidebar-item")}
          >
            <FaUser /> <span>Users</span>
          </NavLink>    
          <NavLink
            to="/profession"
            className={({ isActive }) => (isActive ? "sidebar-item active-link" : "sidebar-item")}
          >
            <SiLinuxprofessionalinstitute /> <span>Profession</span>
          </NavLink>  

          <button className="sidebar-item logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </nav>
      </div>
    );
  }

  return null; // Return null when not authenticated, no need to render sidebar
};

export default Sidebar;
