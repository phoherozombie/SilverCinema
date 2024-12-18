import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ roleRequired }) => {
  const { isAuthenticated, signedPerson } = useSelector((store) => store.authentication);

  if (!isAuthenticated || signedPerson.person_type !== roleRequired) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
