import React, { useContext } from "react";
import logo from "../assets/logo.avif";
import { DataContext } from "../Context Api/Context Api";
import { Link } from "react-router-dom";

function Navbar() {
  const { sidebar, toggleSidebar } = useContext(DataContext);
  return (
    <>
      <div className="h-[7vh] w-[100vw] bg-gradient-to-b from-[#323b43] to-[#202326] fixed z-9999 flex items-center justify-between">
        <div className="h-10 w-10 ml-20">
          <Link to={"/"}>
            <img
              className="h-full w-full  cursor-pointer rounded-full"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <button
          onClick={toggleSidebar}
          className={`h-[2.5vw] mr-21 rounded-md cursor-pointer bg-blue-300 w-[5vw] text-gray-700 transition-all duration-200 ease-in ${
            sidebar ? "bg-red-400 text-white" : " bg-blue-300"
          }`}
        >
          {sidebar ? "Close" : "Menu"}
        </button>
      </div>
    </>
  );
}

export default Navbar;
