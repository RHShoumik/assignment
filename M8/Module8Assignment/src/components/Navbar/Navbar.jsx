import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center mt-20">
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/income">Income</NavLink></li>
            <li><NavLink to="/expense">Expense</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar;