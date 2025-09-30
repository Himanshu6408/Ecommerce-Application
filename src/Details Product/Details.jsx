import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";
import { IoArrowBackCircleSharp } from "react-icons/io5";

function Details() {
  const { id } = useParams();
  const [show, setshow] = useState([]);
  const navigate = useNavigate();
  const detailsdata = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res.data);
      setshow(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    detailsdata();
  }, [id]);
  return (
    <>
      <div className="h-[100vh] w-[100vw]">
        {/* navbar */}
        <Navbar />
        {/* sidebar */}
        <Sidebar />
        <div className="flex items-center justify-between ">
          {/* back button */}
          <button onClick={()=>navigate(-1)} className="cursor-pointer ml-25 mt-30">
            <IoArrowBackCircleSharp size={"2.5vw"} color="red" />
          </button>
          {/* left side image */}
          <div className="h-[70vh] w-[30vw] mt-33 ml-30">
            <img
              className="h-full object-cover mx-auto"
              src={show.image}
              alt=""
            />
          </div>
          {/* right section on a details */}
          <div className="h-[50vh] w-[40vw] mr-40 mt-[22vw]">
            <h1 className="text-md text-gray-700">{show.title}</h1>
            <p className="mt-3 text-sm text-shadow-gray-200">
              {show.description}
            </p>
            <h3 className="mt-3 font-bold">{show.price}</h3>
            <p className="mt-2">{show.rating?.rate}</p>
             <button className="h-[4vw] mt-8 cursor-pointer rounded-md hover:bg-red-500 w-[11vw] bg-red-400 text-white whitespace-nowrap transition-all duration-300 ease-in-out">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
