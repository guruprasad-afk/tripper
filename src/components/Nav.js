import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "react-icons/lib/fa/home";
import AddDayIcon from "react-icons/lib/fa/calendar-plus-o";
import ListDaysIcon from "react-icons/lib/fa/table";

export const Nav = ({ handleLogout }) => (
  <nav className="nav">
    <Link to="/">
      <HomeIcon />
    </Link>
    <Link to="/add">
      <AddDayIcon />
    </Link>
    <Link to="/list">
      <ListDaysIcon />
    </Link>
    <div style={{ cursor: "pointer" }} onClick={() => handleLogout()}>
      <p>Logout</p>
    </div>
  </nav>
);
