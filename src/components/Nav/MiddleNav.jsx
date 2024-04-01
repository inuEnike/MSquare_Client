import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Context } from "../../Hooks/Context";
import { AiOutlineClose } from "react-icons/ai";

const MiddleNav = () => {
  const { toggleNav, state } = useContext(Context);

  const totalItems = state.items
    ? state.items.reduce((total, item) => total + item.quantity, 0)
    : 0;

  return (
    <>
      <div className="flex md:justify-around justify-center mx-5 m-auto items-center py-5">
        <div className="md:hidden block" onClick={toggleNav}>
          <GiHamburgerMenu />
        </div>

        <div className="cursor-pointer md:block hidden">
          <h2 className="text-xs underline">NGN</h2>
        </div>
        <div className="">
          <img src={logo} alt="logo" className="w-[70%] md:w-[50%] m-auto" />
        </div>
        <div className="flex items-center">
          <span className="relative px-3 cursor-pointer mx-2">
            <BsCart3 />
            {/* Display the count */}
            <span className=" rounded-full md:p-1 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-center">
              {totalItems}
            </span>
          </span>
          <span className="px-5 cursor-pointer mx-2">
            {" "}
            <IoMdHeartEmpty />
          </span>
          <span className="pl-5 cursor-pointer">
            {" "}
            <RxAvatar />
          </span>
        </div>
      </div>
    </>
  );
};

export default MiddleNav;
