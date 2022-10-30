import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Error from "./Error";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home HeadingName="Ganesh Maharnur" />} />
        <Route path="/abouts" element={<About HeadingName="Vicky More" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/single_product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
};

export default App;
