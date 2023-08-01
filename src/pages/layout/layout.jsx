import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";
const RootLayout = () => {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

export default RootLayout;
