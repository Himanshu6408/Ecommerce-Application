import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";

function Jewelery() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchJewelery = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/jewelery`
      );
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJewelery();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg p-4 flex flex-col items-center mt-25 ml-5"
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
  );
}

export default Jewelery;
