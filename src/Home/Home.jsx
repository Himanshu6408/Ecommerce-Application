import React, { useContext } from "react";
import homepic from "../assets/home pic1.avif";
import { sliderimage } from "../Context js/Context";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";
function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <div className="h-[100vh] w-[100vw] bg-gradient-to-b from-[#11202c] to-[#28292a] flex items-center justify-between relative">
        {/* sidebar */}
        <Sidebar />
        {/* left side */}
        <div className="h-[70vh] w-[40vw] absolute left-20 ">
          <h1 className="text-[5vw] leading-[5vw] capitalize font-medium text-gray-300 hover:text-gray-100 transition-all duration-300 ease-in-out">
            Unfold the New Collection
          </h1>
          <p className="text-gray-400 mt-10 capitalize text-center transition-all duration-300 ease-in-out hover:text-gray-300">
            Explore our handpicked edit of timeless silhouettes and modern
            designs — crafted to express your unique style. From streetwear to
            classic fits, discover pieces that make every day feel like a
            runway. Redefine your wardrobe with exclusive drops, seasonal edits,
            and statement styles.
          </p>
          {/* image slider */}
          <div className="h-[15vh] w-[40vw] mt-13 flex gap-3 ">
            {sliderimage.map((item, index) => (
              <div
                key={index}
                className="h-full w-[10vw] relative overflow-hidden group"
              >
                <img
                  className="h-full object-cover rounded absolute top-0 left-0 group-hover:scale-110 transition-all duration-300 ease-in-out"
                  src={item}
                  alt={`slider-${index}`}
                />
              </div>
            ))}
          </div>
          {/* icon section */}

          <div className="flex gap-4 mt-15 ml-[25.5vw]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white rounded-full hover:opacity-90 transition"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <div className="-mt-12">
            <button className="h-[4vw] cursor-pointer hover:bg-gray-700 w-[11vw] bg-black text-white whitespace-nowrap transition-all duration-300 ease-in-out">
              Explore Now
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="h-[70vh] w-[40vw] absolute right-20 group overflow-hidden ">
          <img
            className="h-full object-cover absolute top-0 left-0 transition-all duration-300 ease-in-out rounded-lg group-hover:scale-110"
            src={homepic}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Home;
