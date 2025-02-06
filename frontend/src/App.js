import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Users from "./components/Users";
import Dashboard from "./components/Dashboard";
import Leads from "./components/Leads";
import Loans from "./components/Loans";
import Profession from "./components/Profession";
import RefrshHandler from "./RefrshHandler";
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists when App mounts
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    }
  }, []);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      {isAuthenticated ? <Sidebar /> : ""}
      <div style={{ flex: 1, padding: "20px" }}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/users" element={<Users/>} />
        <Route path="/leads" element={<Leads/>} />
        <Route path="/loans" element={<Loans/>} />
        <Route path="/profession" element={<Profession/>} />
        <Route path="/home" element={<PrivateRoute element={<Dashboard />} />} />
      </Routes>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
