import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isUserLoggedIn, children, path }) => {
  return (
    <Routes>
      <Route path={path} element={isUserLoggedIn ? children : <Navigate to="/signin"/>}/>
    </Routes>
  );
};

export default ProtectedRoute;
