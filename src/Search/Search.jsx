import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";
import { AiOutlineSearch } from "react-icons/ai";
import { DataView } from "../Axios/Axios";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";

function Search() {
  const [product, setproduct] = useState([]);
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  const filterproduct = async () => {
    try {
      const res = await DataView();
      console.log(res.data);
      setproduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    filterproduct();
  }, []);
  const searchfilterproduct = product.filter((item) =>
    item.title.toLowerCase().includes(search.trim().toLowerCase())
  );
  return (
    <>
      <div className="h-[100vh] w-[99vw] flex flex-col">
        <Navbar />
        <Sidebar />
        <div className="fixed top-12 left-15">
          <button
            onClick={() => navigate(-1)}
            className=" text-white px-6 py-2 rounded-md cursor-pointer"
          >
            <IoArrowBackCircleSharp size={"2.5vw"} color="red" />
          </button>
        </div>
        {/* 🔍 Top Center Search */}
        <div className="w-full flex justify-center mt-18">
          <div className="relative w-[30vw]">
            <input
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-amber-500 
                         shadow-md text-gray-700 placeholder-gray-400"
            />
            {/* Search Icon */}
            <AiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
          </div>
        </div>
        {/* filter product */}
        {search.trim().length > 0 && (
          <div className="grid grid-cols-4 gap-4 mt-4">
            {searchfilterproduct.length > 0 ? (
              searchfilterproduct.map((item) => (
                <div key={item.id} className="border p-4 rounded shadow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 object-contain mb-2 mx-auto"
                  />
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-gray-600 font-medium">${item.price}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-3">No products found</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
