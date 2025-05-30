import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const userRole = JSON.parse(localStorage.getItem("user") || {});
  return <div>{userRole.id === 4 ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default ProtectedRoute;
