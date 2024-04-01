import React, { useContext, useState } from "react";
import nav from "../nav";
import { Link } from "react-router-dom";
import MNav from "./MNav/MNav.jsx";
import { Context } from "../../Hooks/Context.jsx";

const BottomNav = () => {
  const { showNav } = useContext(Context);
  return (
    <div>
      <ul className="hidden md:flex justify-center items-center my-5 text-xs">
        {nav.map((items, index) => (
          <li className="px-5 hover:text-banner " key={index}>
            <Link to={items.link}>{items.title}</Link>
          </li>
        ))}
      </ul>

      {showNav && <MNav />}
    </div>
  );
};

export default BottomNav;
