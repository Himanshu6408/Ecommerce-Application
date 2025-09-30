import React, { useEffect } from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./Products/Products";
import Details from "./Details Product/Details";
import Jewelery from "./Categories/Jewelery";
import MensClothing from "./Categories/MensClothing";
import Electronics from "./Categories/Electronics";
import Womens from "./Categories/Womens";
import Search from "./Search/Search";
import About from "./About/About";
import Contact from "./Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/details-product/:id" element={<Details />} />
        <Route path="/category/jewelery" element={<Jewelery />} />
        <Route path="/category/MensClothing" element={<MensClothing />} />
        <Route path="/category/Electronics" element={<Electronics />} />
        <Route path="/category/women's clothing" element={<Womens />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
