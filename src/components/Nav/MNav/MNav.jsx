import React, { useContext } from "react";
import nav from "../../nav";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { Context } from "../../../Hooks/Context";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

const MNav = () => {
  const { toggleNav } = useContext(Context);

  return (
    <div className="">
      <div className="h-[100vh] bg-white w-[100%] fixed top-0 bottom-0 md:hidden rounded-md z-[1]">
        <div className="md:hidden block m-5" onClick={toggleNav}>
          <AiOutlineClose />
        </div>

        <div className=" my-5">
          <img src={logo} alt="logo" className="w-[70%] md:w-[50%] m-auto" />
        </div>
        <form action="" className="text-center flex justify-center">
          <input
            type="text"
            placeholder="Search"
            className="border-slate-300 border-t-0 border rounded-xl px-5 mr-2"
          />
          <AiOutlineSearch />
        </form>
        <ul className="flex flex-col justify-center px-5">
          {nav.map((items, index) => (
            <li className="py-5 text-sm" key={index}>
              <Link to={items.link}>{items.title}</Link>
            </li>
          ))}
          <li className="">
            <button className="mr-5 bg-bg px-5 py-3 hover:bg-none">
              Signup
            </button>
            <button className="ml-3 hover:bg-bg px-5 py-3 bg-none">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MNav;
