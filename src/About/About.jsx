import React from "react";
import AboutImage from "../assets/img1.avif";
import team1 from "../assets/team1.avif"
import team2 from "../assets/team2.avif"
import team3 from "../assets/team3.avif"
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-800">
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
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-16 gap-10">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-4">About Our Company</h1>
          <p className="text-gray-600 mb-6">
            We are committed to delivering high-quality products and exceptional
            service. Our team works tirelessly to innovate and provide solutions
            that exceed expectations. Join us on our journey to make a
            difference and create meaningful experiences.
          </p>
          <button className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow hover:bg-amber-600 transition">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src={AboutImage}
            alt="About"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            To provide innovative and reliable solutions that empower our
            customers and improve everyday life. We value quality, integrity,
            and customer satisfaction above all.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-600 text-lg">
            To be a global leader in our industry, continuously innovating and
            inspiring positive change for communities and businesses worldwide.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 mb-8">
            A passionate group of professionals committed to excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="rounded-lg shadow p-4">
              <img
                src={team1}
                alt="Team member"
                className="rounded-full h-40 w-40 mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-xl">John Doe</h3>
              <p className="text-gray-500">CEO</p>
            </div>
            <div className="rounded-lg shadow p-4">
              <img
                src={team2}
                alt="Team member"
                className="rounded-full h-40 w-40 mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-xl">Jane Smith</h3>
              <p className="text-gray-500">CTO</p>
            </div>
            <div className="rounded-lg shadow p-4">
              <img
                src={team3}
                alt="Team member"
                className="rounded-full h-40 w-40 mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-xl">Alice Lee</h3>
              <p className="text-gray-500">COO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
     
     <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-amber-500 to-yellow-400 text-white text-center rounded-t-3xl">
  <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">Join Our Journey</h2>
  <p className="mb-6 text-lg max-w-xl mx-auto drop-shadow-sm">
    Be part of a team that values innovation, growth, and impact.
  </p>
  
  <button className="px-8 py-3 bg-white text-amber-500 rounded-lg font-semibold 
                     hover:bg-gray-100 hover:scale-105 transition transform shadow-lg">
    Contact Us
  </button>

  {/* Social Media Icons */}
  <div className="flex justify-center mt-8 gap-6 text-2xl">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-700 hover:scale-125 transform transition duration-300 shadow-lg p-2 rounded-full bg-white/20"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 hover:scale-125 transform transition duration-300 shadow-lg p-2 rounded-full bg-white/20"
    >
      <FaTwitter />
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-600 hover:scale-125 transform transition duration-300 shadow-lg p-2 rounded-full bg-white/20"
    >
      <FaLinkedinIn />
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-pink-500 hover:scale-125 transform transition duration-300 shadow-lg p-2 rounded-full bg-white/20"
    >
      <FaInstagram />
    </a>
  </div>
</section>

    </div>
  );
}

export default About;
