import React, { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import { FaCheckCircle, FaClock, FaMoneyCheckAlt } from "react-icons/fa";
import Chart from "react-apexcharts";
import "./Dashboard.css"; // Add a separate CSS file for styling

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useState("");


  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

 

  // Sample stats data
  const stats = [
    { title: "Total Loans", value: 120, icon: <FaMoneyCheckAlt />, color: "#73c0e7" },
    { title: "Approved Loans", value: 85, icon: <FaCheckCircle />, color: "#28a745" },
    { title: "Pending Loans", value: 35, icon: <FaClock />, color: "#ffc107" },
  ];

  // Chart Data (Example Loan Approvals)
  const chartData = {
    options: {
      chart: { id: "loan-trends" },
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
    },
    series: [{ name: "Approved Loans", data: [10, 15, 25, 30, 40, 50] }],
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {loggedInUser} 👋</h1>
       
      </div>

      {/* Stats Cards */}
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ backgroundColor: stat.color }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Loan Approval Chart */}
      <div className="chart-container">
        <h2>Loan Approval Trends</h2>
        <Chart options={chartData.options} series={chartData.series} type="line" width="600" />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Dashboard;
