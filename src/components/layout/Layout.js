import React from "react";
import "./Layout.css";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layoutContainer">
        <div className="side">
          <Sidebar />
        </div>
        <div className="body">{children}</div>
      </div>
    </>
  );
};

export default Layout;
