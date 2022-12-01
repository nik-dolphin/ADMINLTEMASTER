import React, { useEffect } from "react";
// import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("authTokenADminLTE");
    if (user === null) {
      navigate("/login");
    }
  }, [navigate])
  

  return (
    <>
      <h1>Welcome To Dashboard</h1>
    </>
  );
}

export default Dashboard;
