import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navbar />
      <Sidebar />

      {/* Back button */}
      <div className="fixed top-12 left-15 z-10">
        <button
          onClick={() => navigate(-1)}
          className="text-white px-6 py-2 rounded-md cursor-pointer"
        >
          <IoArrowBackCircleSharp size={"2.5vw"} color="red" />
        </button>
      </div>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="flex flex-col md:flex-row gap-10">

          {/* Contact Form */}
          <div className="md:w-2/3 bg-white p-8 rounded-xl shadow-lg">
            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <textarea
                rows="6"
                placeholder="Your Message"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition transform hover:scale-105 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-xl mb-2">Email</h3>
              <p className="text-gray-600">contact@company.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-xl mb-2">Phone</h3>
              <p className="text-gray-600">+91 123 456 7890</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-xl mb-2">Address</h3>
              <p className="text-gray-600">123 Main Street, City, Country</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;
