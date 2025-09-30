import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";
import { DataView } from "../Axios/Axios";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";

function Products() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  const fakeapidata = async () => {
    try {
      const res = await DataView();
      console.log(res.data);
      setdata(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeapidata();
  }, []);

  return (
    <>
      <div>
        {/* navbar fixed */}
        <Navbar />
        {/* sidebar */}
        <Sidebar />

        {/* main content with padding-top so content not hidden behind navbar */}
        <div className="pt-[5.5vh] px-8">
          <div className="grid grid-cols-4 gap-6">
            {data.map((item) => (
              <div key={item.id}>
                <Card fakeapidata={item} />
              </div>
            ))}
          </div>
        </div>

        {/* bottom back button */}
        <div className="fixed top-15 left-15">
          <button
            onClick={() => navigate(-1)}
            className=" text-white px-6 py-2 rounded-md cursor-pointer"
          >
            <IoArrowBackCircleSharp size={"2.5vw"} color="red" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
