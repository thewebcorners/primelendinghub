import React, { useEffect, useState } from "react";
const Loans = () => {
   const [loggedInUser, setLoggedInUser] = useState("");
    useEffect(() => {
      setLoggedInUser(localStorage.getItem("loggedInUser"));
    }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {loggedInUser} 👋</h1>
       
      </div>
      <div className="container">
      <table border="1">
        <thead>
          <tr>
            <th>SNo.</th>
            <th>Client Name</th>
            <th>Client Mobile</th>
            <th>Client Email</th>
            <th>Loan Amount</th>
            <th>Loan Tenure</th>
            <th>Loan Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample Data - Replace with dynamic data later */}
          <tr>
            <td className="text-center">1</td>
            <td>John Doe</td>
            <td className="text-center">+1234567890</td>
            <td>johndoe@example.com</td>
            <td className="text-center">$10,000</td>
            <td className="text-center">24 Months</td>
            <td className="text-center">Approved</td>
            <td className="text-center">
              <button>View</button>
            </td>
          </tr>
        </tbody>
      </table></div>
    </div>
  );
};

export default Loans;
