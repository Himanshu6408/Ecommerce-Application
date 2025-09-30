import React, { useContext, useState } from "react";
import sidebar_image from "../assets/sidebar-image.avif";
import { navbar } from "../Context js/Context";
import { Link } from "react-router-dom";
import { DataContext } from "../Context Api/Context Api";
import { Categories } from "../Context js/Context";

function Sidebar() {
  const { sidebar, showCategories, opencategory, closecategory } =
    useContext(DataContext);

  return (
    <>
      {sidebar && (
        <div className="h-screen w-1/5 bg-gradient-to-b from-[#2f475b] to-[#28292a] p-4 flex flex-col items-center z-50 mt-12 fixed transition-all duration-300 ease-in-out">
          {/* Top Image Section */}
          <div className="flex flex-col items-center mt-5 mb-10">
            <Link to="/">
              <img
                className="h-24 w-24 cursor-pointer object-cover rounded-full border-2 border-amber-500 hover:scale-105 transition-transform duration-300"
                src={sidebar_image}
                alt="Sidebar"
              />
            </Link>
            <p className="mt-3 text-center font-semibold text-gray-300 hover:text-amber-400 transition-colors duration-300 cursor-pointer">
              Adrian Veyron
            </p>
          </div>

          <span className="w-full mb-6 h-[1px] bg-gray-400"></span>

          {/* Navbar Section */}
          <div className="flex flex-col w-full ml-1 gap-4">
            {navbar.map((item, index) => {
              const Icon = item.icon;

              if (item.menu === "Categories") {
                return (
                  <div
                    key={index}
                    className="relative w-full"
                    onMouseEnter={opencategory}
                    onMouseLeave={closecategory}
                  >
                    <button
                      className="flex items-center gap-3 w-full px-4 py-[11px] text-gray-300 rounded-lg
                          hover:bg-amber-500 hover:text-gray-900
                          transform hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.menu}</span>
                    </button>

                    {/* Dropdown */}
                    {showCategories && (
                      <div className="absolute top-12 left-0 ml-2 bg-[#2f475b] rounded-md shadow-lg w-48 flex flex-col z-50">
                        {Categories.map((category, i) => (
                          <Link
                            key={i}
                            to={`/category/${category.toLowerCase()}`}
                            className="px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-amber-400 rounded-md whitespace-nowrap"
                          >
                            {category}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={index} to={item.path || "#"}>
                  <button
                    className="flex cursor-pointer items-center gap-3 w-full px-4 py-[11px] text-gray-300 rounded-lg
                         hover:bg-amber-500 hover:text-gray-900
                         transform hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.menu}</span>
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
