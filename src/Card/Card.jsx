import React from "react";
import { Link } from "react-router-dom";

function Card({ fakeapidata }) {
  const { image, title, id } = fakeapidata;

  return (
    <>
      <div className="h-fit w-full ps-8 py-20">
        {/* card */}
        <Link to={`/details-product/${id}`}>
          <div className="h-[50vh] w-[20vw] rounded-md overflow-hidden border-1 border-gray-400 cursor-pointer">
            {/* card top section */}
            <div className="h-[22vh] flex items-center justify-center">
              {/* img section */}
              <img className="h-full object-cover mt-8" src={image} alt="" />
            </div>
            <span className="w-full h-[1px] bg-gray-300 inline-block mt-12"></span>
            {/* title section */}
            <h1 className="text-center mt-4 text-lg text-gray-700">{title}</h1>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
