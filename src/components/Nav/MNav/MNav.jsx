import React, { useContext } from "react";
import nav from "../../nav";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { Context } from "../../../Hooks/Context";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const MNav = () => {
  const { toggleNav, showNav } = useContext(Context);

  return (
    <div className="h-[100vh] bg-banner w-[100%] absolute top-0 md:hidden rounded-md z-[1]">
      <div className="md:hidden block m-5" onClick={toggleNav}>
        <AiOutlineClose />
      </div>

      <div className=" my-5">
        <img src={logo} alt="logo" className="w-[70%] md:w-[50%] m-auto" />
      </div>
      <ul className="flex flex-col justify-center">
        {nav.map((items) => (
          <li className="px-5 py-10">
            <Link to={items.link}>{items.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MNav;
