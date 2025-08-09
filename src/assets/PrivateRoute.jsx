import React from "react";
import { Navigate } from "react-router-dom";
import { useFreelanceContext } from "./FreelanceContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useFreelanceContext();
  return isAuthenticated ? children : <Navigate to="/join" replace />;
};

export default PrivateRoute;
