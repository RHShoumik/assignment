import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/income">Income</NavLink></li>
            <li><NavLink to="/expense">Expense</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar;