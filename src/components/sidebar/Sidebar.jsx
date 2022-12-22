import React from "react";
import "./Sidebar.css";
import logo from "../../asset/tego.png";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { settingsData, sidebarData } from "./sidebarData";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <img src={logo} alt="tego" />

        <div className="sidebar__menu">
          <div>
            <ul>
              <li>
                {sidebarData.map((item, index) => {
                  return (
                    <NavLink
                      style={({ isActive }) => ({
                        borderRight: isActive ? "4px solid  #2357D1" : "",
                        background: isActive ? "#f8f8f8" : "",
                      })}
                      key={index}
                      className="menu-item"
                      to={item.path}
                    >
                      {item.icons}
                      <span> {item.title} </span>
                    </NavLink>
                  );
                })}
              </li>
            </ul>
          </div>
          <hr />
          {/* <br /> */}
          <br />
          <div>
            <ul>
              <li>
                {settingsData.map((item, index) => {
                  return (
                    <NavLink
                      style={({ isActive }) => ({
                        borderRight: isActive ? "4px solid  #2357D1" : "",
                        background: isActive ? "#f8f8f8" : "",
                      })}
                      key={index}
                      className="menu-item"
                      to={item.path}
                    >
                      {item.icons}
                      <span> {item.title} </span>
                    </NavLink>
                  );
                })}
              </li>
            </ul>
          </div>
          <hr />
          <br />

          <ul>
            <li>
              <NavLink
                style={{
                  color: "red",
                }}
                className="menu-item"
                to="/"
              >
                <Icon icon="material-symbols:logout" />
                <span> logout </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
