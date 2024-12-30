import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ roleRequired }) => {
  const { isAuthenticated, signedPerson } = useSelector((store) => store.authentication);

  // Log check
  if (!isAuthenticated) {
    console.log("Access Denied: User is not authenticated.");
    return <Navigate to="/" replace />;
  }

  // Role check
  if (signedPerson?.type_account !== roleRequired) {
    console.log(
      `Access Denied: User role is ${signedPerson?.type_account || "undefined"}, required role is ${roleRequired}.`
    );
    return <Navigate to="/" replace />;
  }

  console.log("Access Granted:", signedPerson.type_account);
  return <Outlet />;
};
