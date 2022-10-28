import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Error from "./Error";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/abouts" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/single_product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
  )
};

export default App;
