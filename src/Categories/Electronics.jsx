import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";

function Electronics() {
      const [show, setshow] = useState([]);
  const navigate = useNavigate();
    const electronicsdata = async ()=>{
      try{
          const res = await axios.get(  `https://fakestoreapi.com/products/category/electronics`)
          console.log(res.data)
          setshow(res.data)
      }
      catch(error){
        console.log(error)
      }
    }
    useEffect(()=>{
        electronicsdata()
    },[])
  return (
    <>
     <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
        {show.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg p-4 flex flex-col items-center ml-5 mt-25"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mb-4"
            />
            <h2 className="text-lg font-bold text-center mb-2">
              {product.title}
            </h2>
            <p className="text-amber-500 font-semibold">${product.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Electronics
